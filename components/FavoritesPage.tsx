"use client";

import { useFavorites } from "@/app/context/FavoritesContext";
import ActivityCard from "./ActivityCard";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="p-10 text-center text-[#52357b] dark:text-[#e3de61]">
        Henüz favorilere bir etkinlik eklemediniz.
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl text-center font-bold text-[#52357b] dark:text-[#e3de61] mb-20">
        Favori Etkinliklerim
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {favorites.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}
