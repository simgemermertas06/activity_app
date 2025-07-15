"use client";

import { useFilterContext } from "@/app/context/FilterContext";
import { DateRange } from "react-date-range";
import { useState, useEffect, useRef } from "react";
import "react-date-range/dist/styles.css"; // ana stil
import "react-date-range/dist/theme/default.css"; // tema
import { HiOutlineCalendar, HiChevronDown } from "react-icons/hi";

type CustomRange = {
  startDate: Date;
  endDate: Date;
  key: string;
};

type DateRangeSelection = {
  selection: CustomRange;
};

export default function DateRangePicker() {
  const { dateRange, setDateRange } = useFilterContext();
  //context in tarih aralığını alıp güncelleyeceğiz

  //react-date-range kütüphanesi, tarih aralığını Range[] tipinde nesenelerle yöneticez
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1); // yılın 1 Ocak'ı
  const endOfYear = new Date(today.getFullYear(), 11, 31); // yılın 31 Aralık'ı

  const [range, setRange] = useState<CustomRange[]>([
    {
      startDate: dateRange.startDate
        ? new Date(dateRange.startDate)
        : startOfYear,
      endDate: dateRange.endDate ? new Date(dateRange.endDate) : endOfYear,
      key: "selection",
    },
  ]);

  // Takvim dropdown'un açık/kapalı durumu
  const [open, setOpen] = useState(false);

  // Takvim dışına tıklanınca kapatma için ref ve event listener
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //kullanıcı takvimde yeni tarih aralığı seçtiğinde bu useEffect tetiklenir.
  //setDateRange fonksiyonu, bizim global filtre context’imizdeki dateRange değerini günceller.
  useEffect(() => {
    setDateRange({
      startDate: range[0].startDate?.toISOString().split("T")[0] || "",
      endDate: range[0].endDate?.toISOString().split("T")[0] || "",
    });
  }, [range, setDateRange]);

  // Tek tarih seçildiğinde endDate'i günün son anı yaparak ayarla
  const handleRangeChange = (item: DateRangeSelection) => {
    const { startDate } = item.selection;
    let endDate = item.selection.endDate;

    if (startDate.toDateString() === endDate.toDateString()) {
      endDate = new Date(startDate);
      endDate.setHours(23, 59, 59, 999);
    }

    setRange([{ startDate, endDate, key: "selection" }]);
    setOpen(false); // tarih seçince dropdown kapansın
  };

  // Dropdown’da gösterilecek tarih metnini oluştur
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const displayText =
    range[0].startDate && range[0].endDate
      ? range[0].startDate.toDateString() === range[0].endDate.toDateString()
        ? formatDate(range[0].startDate)
        : `${formatDate(range[0].startDate)} - ${formatDate(range[0].endDate)}`
      : "Tarih seçin";

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Dropdown butonu */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 border rounded-md bg-white dark:bg-[#1e1e1e] dark:text-white border-[#52357b] dark:border-[#e3de61] cursor-pointer select-none"
      >
        <HiOutlineCalendar className="w-5 h-5 text-[#52357b] dark:text-[#e3de61]" />
        <span>{displayText}</span>
        <HiChevronDown
          className={`w-4 h-4 ml-1 transition-transform duration-200 text-[#52357b] dark:text-[#e3de61] ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown içeriği */}
      {open && (
        <div className="absolute z-50 mt-1 shadow-lg bg-white dark:bg-[#52357B] rounded-md p-2">
          <DateRange
            editableDateInputs={true}
            onChange={handleRangeChange}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            showDateDisplay={false}
            rangeColors={["#52357B"]}
          />
        </div>
      )}
    </div>
  );
}
