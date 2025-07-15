"use client";

import { useFilterContext } from "@/app/context/FilterContext";
import { FiSearch } from "react-icons/fi";

export default function SearchInput() {
  const { searchQuery, setSearchQuery } = useFilterContext();
  //context'teki searchQuery state'i alıp ve güncelliyoruz

  //Kullanıcı input'a yazdıkça context'teki arama kelimesi güncelleniyor
  return (
    <div className="relative w-full md:w-64">
      <input
        type="text"
        placeholder="Etkinlik ara..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pr-10 px-4 py-2 border border-[#52357b] dark:border-[#e3de61] rounded-md bg-white dark:bg-[#1e1e1e] focus:outline-none
                   text-[#52357b] dark:text-[#e3de61] placeholder:text-black  placeholder:dark:text-white"
      />
      <FiSearch
        className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none
                   text-[#52357b] dark:text-[#e3de61]"
        size={20}
      />
    </div>
  );
}
