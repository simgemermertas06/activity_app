"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Activity } from "@/app/constants/activityData";
import { GoHeart, GoHeartFill } from "react-icons/go";
import Link from "next/link";
import { useFavorites } from "@/app/context/FavoritesContext";

interface ActivityCardProps {
  // Bileşen props tipini TypeScript ile belirtiyoruz.
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const { favorites, toggleFavorite } = useFavorites();
  //useContext kullanarak FavoritesContext'te oluşturduğumuz useFavorites hookunu kullanıyoruz.
  const isFavorited = favorites.some((item) => item.id === activity.id);
  //kart favorilere eklnmişse kalbi doldur

  const [animate, setAnimate] = useState(false);
  //kalbe tıklanınca oluşacak animasyonun durumu için state

  const handleFavoriteClick = () => {
    toggleFavorite(activity);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };
  //Kalp ikonuna basıldığında Favorilere ekle/çıkar,amimasyonu başlat,3 sn sonra dur

  return (
    <div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#e3de61] dark:bg-[#52357b] h-full flex flex-col"
      data-aos="flip-left"
    >
      <div className="relative h-60 w-full">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          className="object-cover rounded-t"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="px-6 pt-8 pb-4 flex flex-col relative h-full">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-serif text-2xl text-[#52357b] dark:text-[#e3de61] break-words">
            {activity.title}
          </h3>
          <button
            onClick={handleFavoriteClick}
            className={`text-3xl ml-2 shrink-0 transition-transform duration-300 ${
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
        </div>

        <p className="text-md text-gray-600 dark:text-gray-300 mb-1">
          <strong className="underline font-mono">Kategori:</strong>{" "}
          {activity.category}
        </p>
        <p className="text-md text-gray-600 dark:text-gray-300 mb-1">
          <strong className="underline font-mono">Tarih:</strong>{" "}
          {new Date(activity.date).toLocaleDateString("tr-TR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p className="text-md text-gray-600 dark:text-gray-300 mb-4">
          <strong className="underline font-mono">Şehir:</strong>{" "}
          {activity.location}
        </p>
        <p className="text-gray-700 dark:text-gray-200 text-sm mt-4">
          {activity.description.split(".")[0] + "."}
        </p>

        <div className="mt-auto">
          <Link
            href={`/activity/${activity.id}`}
            className="inline-block rounded px-5 py-2.5 overflow-hidden group 
              bg-[#52357b] text-[#e3de61] hover:bg-gradient-to-r hover:from-[#52357b] hover:to-[#6a4997] 
              hover:ring-2 hover:ring-offset-2 hover:ring-[#6a4997] 
              transition-all ease-out duration-300
              dark:bg-[#e3de61] dark:text-[#52357b] dark:hover:bg-[#e3de61] dark:hover:text-white"
          >
            <span className="relative">Detaya Git</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
