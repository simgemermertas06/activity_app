"use client";

//TODO: [id] ye göre listelenecek olan aktivite detay sayfası

import { useState, useEffect } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { activities } from "@/app/constants/activityData";
import { useFavorites } from "@/app/context/FavoritesContext";

interface PageProps {
  params: { id: string };
}

export default function ActivityDetailPage({ params }: PageProps) {
  const activity = activities.find((item) => item.id === parseInt(params.id));
  const { favorites, toggleFavorite } = useFavorites();

  // Favori animasyonu için state
  const [animate, setAnimate] = useState(false);

  // Favori durumu context'ten kontrol ediliyor
  const isFavorited = favorites.some((item) => item.id === activity?.id);

  const handleFavoriteClick = () => {
    if (activity) {
      toggleFavorite(activity);
      setAnimate(true);
      setTimeout(() => setAnimate(false), 300);
    }
  };

  if (!activity) {
    return (
      <div className="p-40 text-center text-[#52357b] dark:text-[#e3de61]">
        Aktivite bulunamadı.
      </div>
    );
  }

  return (
    <div className="p-10" data-aos="fade-up">
      <h1 className="text-3xl font-serif mb-8 text-[#52357b] dark:text-[#e3de61]">
        {activity.title}
      </h1>

      <div className="flex flex-col md:flex-row gap-6 relative">
        {/* Resim kutusu */}
        <div
          className="border rounded-lg overflow-hidden md:w-1/2
    border-[#e3de61] dark:border-[#52357b] aspect-[4/3]"
        >
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Yazı kutusu */}
        <div
          className="border rounded-lg p-6 md:w-1/2
            border-[#e3de61] dark:border-[#52357b]
            flex flex-col gap-4
            relative"
        >
          {/* Favori butonu sağ üstte */}
          <button
            onClick={handleFavoriteClick}
            className={`absolute top-5 right-8 text-3xl transition-transform duration-300 ${
              animate ? "scale-125" : ""
            }`}
            aria-label="Favorilere ekle"
            type="button"
          >
            {isFavorited ? (
              <GoHeartFill className="text-red-500" />
            ) : (
              <GoHeart className="text-red-500" />
            )}
          </button>

          <p>
            <strong className="text-[#52357b] dark:text-[#e3de61] underline">
              Kategori:
            </strong>{" "}
            {activity.category}
          </p>

          <p>
            <strong className="text-[#52357b] dark:text-[#e3de61] underline">
              Tarih:
            </strong>{" "}
            {new Date(activity.date).toLocaleDateString("tr-TR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>

          <p>
            <strong className="text-[#52357b] dark:text-[#e3de61] underline">
              Şehir:
            </strong>{" "}
            {activity.location}
          </p>

          <p>
            <strong className="text-[#52357b] dark:text-[#e3de61] underline">
              Yer:
            </strong>{" "}
            {activity.place}
          </p>

          <p>
            <strong className="text-[#52357b] dark:text-[#e3de61] underline">
              Katılımcı Sayısı:
            </strong>{" "}
            {activity.participantCount}
          </p>

          <p>{activity.description}</p>

          <p className="text-[#9c992e] dark:text-[#8e70b6] underline flex gap-2 flex-wrap mt-6">
            {activity.tags.map((tag, index) => (
              <a
                key={index}
                href={`/tag/${tag.replace("#", "")}`}
                className="hover:underline"
              >
                {tag}
              </a>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
