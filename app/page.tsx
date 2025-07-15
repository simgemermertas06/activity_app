"use client";

import { useState } from "react";
import CategorySlider from "@/components/CategorySlider";
import FilterBar from "@/components/FilterBar";
import { categories } from "./constants/categoryData";
import { activities } from "./constants/activityData";
import ActivityCard from "@/components/ActivityCard";
import { useFilterContext } from "@/app/context/FilterContext";

export default function HomePage() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const [visibleCount, setVisibleCount] = useState(6); // Lazy loading için state

  const { location, dateRange, searchQuery } = useFilterContext();

  const selectedCategory = categories.find((c) => c.id === selectedCategoryId);

  const isWithinDateRange = (activityDateStr: string) => {
    const activityDate = new Date(activityDateStr);
    const startDate = new Date(dateRange.startDate);
    const endDate = new Date(dateRange.endDate);
    endDate.setHours(23, 59, 59, 999);
    return activityDate >= startDate && activityDate <= endDate;
  };

  const filteredActivities = activities.filter((activity) => {
    if (selectedCategory && activity.category !== selectedCategory.name) {
      return false;
    }

    if (location && location !== "" && activity.location !== location) {
      return false;
    }

    if (dateRange.startDate && dateRange.endDate) {
      if (!isWithinDateRange(activity.date)) {
        return false;
      }
    }

    if (searchQuery && searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      if (
        !activity.title.toLowerCase().includes(query) &&
        !activity.description.toLowerCase().includes(query)
      ) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="p-6">
      <CategorySlider
        categories={categories}
        onSelect={setSelectedCategoryId}
        selectedCategoryId={selectedCategoryId}
      />

      <div className="my-6">
        <FilterBar />
      </div>

      {filteredActivities.length === 0 && (
        <p className="mt-10 text-center text-[#52357b] dark:text-[#e3de61]">
          Filtrelerinize uygun etkinlik bulunamadı.
        </p>
      )}

      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full px-4">
          {filteredActivities.slice(0, visibleCount).map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>

      {/* Daha Fazla Yükle Butonu */}
      {visibleCount < filteredActivities.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="bg-[#52357b] text-[#e3de61] dark:bg-[#e3de61] dark:text-[#52357b] px-6 py-2 rounded-lg shadow-md transition hover:scale-105"
          >
            Daha Fazla Yükle
          </button>
        </div>
      )}
    </div>
  );
}
