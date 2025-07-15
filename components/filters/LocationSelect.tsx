"use client";

import { useFilterContext } from "@/app/context/FilterContext";
import { FiMapPin } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi";

export default function LocationSelect() {
  const { location, setLocation } = useFilterContext();
  //context'teki location state'i alır ve günceller

  return (
    <div className="relative w-full">
      <label htmlFor="location-select" className="sr-only">
        Konum seçiniz
      </label>
      <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#52357b] dark:text-[#e3de61] pointer-events-none" />
      <select
        id="location-select"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        //seçilen konumu context'teki location state'ine gonderir
        className="w-full pl-10 pr-10 py-2 border border-[#52357b] dark:border-[#e3de61] rounded-md bg-white dark:bg-[#1e1e1e] focus:outline-none appearance-none"
      >
        <option
          value=""
          className="bg-white dark:bg-[#1e1e1e] text-[#52357b] dark:text-[#e3de61]"
        >
          Tüm Şehirler
        </option>
        <option
          value="Adana"
          className="bg-white dark:bg-[#1e1e1e] text-[#52357b] dark:text-[#e3de61]"
        >
          Adana
        </option>
        <option
          value="Ağrı"
          className="bg-white dark:bg-[#1e1e1e] text-[#52357b] dark:text-[#e3de61]"
        >
          Ağrı
        </option>
        <option
          value="Ankara"
          className="bg-white dark:bg-[#1e1e1e] text-[#52357b] dark:text-[#e3de61]"
        >
          Ankara
        </option>
        <option
          value="Antalya"
          className="bg-white dark:bg-[#1e1e1e] text-[#52357b] dark:text-[#e3de61]"
        >
          Antalya
        </option>
        <option
          value="Bursa"
          className="bg-white dark:bg-[#1e1e1e] text-[#52357b] dark:text-[#e3de61]"
        >
          Bursa
        </option>
        <option
          value="Gaziantep"
          className="bg-white dark:bg-[#1e1e1e] text-[#52357b] dark:text-[#e3de61]"
        >
          Gaziantep
        </option>
        <option
          value="İstanbul"
          className="bg-white dark:bg-[#1e1e1e] text-[#52357b] dark:text-[#e3de61]"
        >
          İstanbul
        </option>
        <option
          value="İzmir"
          className="bg-white dark:bg-[#1e1e1e] text-[#52357b] dark:text-[#e3de61]"
        >
          İzmir
        </option>
        <option
          value="Malatya"
          className="bg-white dark:bg-[#1e1e1e] text-[#52357b] dark:text-[#e3de61]"
        >
          Malatya
        </option>
        <option
          value="Nevşehir"
          className="bg-white dark:bg-[#1e1e1e] text-[#52357b] dark:text-[#e3de61]"
        >
          Nevşehir
        </option>
        <option
          value="Trabzon"
          className="bg-white dark:bg-[#1e1e1e] text-[#52357b] dark:text-[#e3de61]"
        >
          Trabzon
        </option>
      </select>
      <HiChevronDown className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-[#52357b] dark:text-[#e3de61]" />
    </div>
  );
}
