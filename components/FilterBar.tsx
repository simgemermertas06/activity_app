"use client";

//TODO : BURDA FİLTRELERİ  BİR ARADA TUTUCAZ

import LocationSelect from "./filters/LocationSelect";
import DateRangePicker from "./filters/DateRangePicker";
import SearchInput from "./filters/SearchInput";

export default function FilterBar() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-4" data-aos="fade-down">
      {/* Masaüstü görünüm */}
      <div className="hidden md:flex justify-between items-center gap-6">
        {/* Burada gap-6 ile filtreler arası eşit boşluk */}
        <div className="w-1/4">
          <LocationSelect />
        </div>
        <div className="w-1/2">
          <DateRangePicker />
        </div>
        <div className="w-1/4">
          <SearchInput />
        </div>
      </div>

      {/* Mobil görünüm */}
      <div className="flex flex-col md:hidden gap-4 items-center">
        {/* Mobilde tüm filtreler aynı genişlikte (max-w-md) */}
        <div className="w-full max-w-md">
          <SearchInput />
        </div>
        <div className="w-full max-w-md">
          <LocationSelect />
        </div>
        <div className="w-full max-w-md">
          <DateRangePicker />
        </div>
      </div>
    </div>
  );
}
