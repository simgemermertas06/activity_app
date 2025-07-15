"use client";

import { useState } from "react";
import ActivityCard from "./ActivityCard";
import { activities } from "@/app/constants/activityData";

export default function ActivityList() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="p-10">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {activities.slice(0, visibleCount).map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>

      {visibleCount < activities.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-[#52357b] text-[#e3de61] dark:bg-[#e3de61] dark:text-[#52357b] px-6 py-2 rounded-lg shadow-md transition hover:scale-105"
          >
            Daha Fazla Yükle
          </button>
        </div>
      )}
    </div>
  );
}
