"use client";

import Image from "next/image";
import { Category } from "@/app/constants/categoryData";
import { useRef, useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import AOS from "aos";

interface CategorySliderProps {
  categories: Category[];
  onSelect: (id: number) => void; // Kullanıcı kategori seçtiğinde çağrılır
  selectedCategoryId: number | null; // Seçili kategori id'si
}

export default function CategorySlider({
  categories,
  onSelect,
  selectedCategoryId,
}: CategorySliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null); //animasyon iptali için gereken id
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  // Otomatik kaydırma açık mı kapalı m

  // Otomatik sonsuz yumuşak kaydırma
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const itemWidth = slider.scrollWidth / 3; //kategor 3 kere tekrarlar
    slider.scrollLeft = itemWidth;

    if (!isAutoScrolling) return;

    const speed = 1;

    const step = () => {
      if (!slider) return;

      slider.scrollLeft += speed; //kaydırma yönü

      //sonsuz kaydırma(başa dön)
      if (slider.scrollLeft >= itemWidth * 2) {
        slider.scrollLeft = itemWidth;
      } else if (slider.scrollLeft <= 0) {
        slider.scrollLeft = itemWidth;
      }

      //animasyon etkraı için step i tekrar çağır
      animationFrameId.current = requestAnimationFrame(step);
    };

    animationFrameId.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, [categories, isAutoScrolling]);

  // AOS animasyonlarını scroll sonrası güncelle
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    //kaydırma oldukça animasyon refresh olur
    const handleScroll = () => {
      AOS.refresh();
    };

    slider.addEventListener("scroll", handleScroll);

    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //bir kategoriya tıklandığı an otomatik kaydırma iptal olur
  const stopAutoScroll = () => {
    if (animationFrameId.current)
      cancelAnimationFrame(animationFrameId.current);
    setIsAutoScrolling(false);
  };

  //sağ oka basınca slider ı durdur
  const scrollLeft = () => {
    stopAutoScroll();
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: -150, behavior: "smooth" });
  };

  //sol oka basınca slider ı durdur
  const scrollRight = () => {
    stopAutoScroll();
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: 150, behavior: "smooth" });
  };

  //kategorileri tekrarla mak için dizi oluşturduk
  const repeatedCategories = [...categories, ...categories, ...categories];

  return (
    <div
      id="etkinlikler"
      className="flex flex-col items-center gap-6 relative max-w-5xl mx-auto"
      data-aos="fade-down"
    >
      <h2 className="text-2xl font-semibold text-center text-[#52357b] dark:text-[#e3de61]">
        Etkinlik Kategorileri
      </h2>

      <div className="relative w-full px-12 sm:px-16">
        <button
          onClick={scrollLeft}
          aria-label="Sol kaydır"
          className="absolute top-1/2 left-0 -translate-y-1/2 p-2 rounded-full
            hover:text-purple-600 transition
            text-[#52357b] dark:text-[#e3de61] z-20"
        >
          <HiChevronLeft size={40} />
        </button>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide py-2 gap-4 sm:gap-6 px-12 sm:px-16 snap-x snap-mandatory scroll-smooth whitespace-nowrap"
        >
          {repeatedCategories.map((category, index) => (
            <div
              key={index}
              onClick={() => {
                stopAutoScroll();
                onSelect(category.id);
              }}
              className="flex flex-col items-center cursor-pointer transition-transform hover:scale-105 flex-shrink-0
                w-20 sm:w-28 p-1 rounded-full select-none"
            >
              <div
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden relative border-4
                  ${
                    selectedCategoryId === category.id
                      ? "border-[#52357b] dark:border-[#e3de61]"
                      : "border-transparent"
                  }
                `}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <span className="text-sm mt-2 select-none">{category.name}</span>
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          aria-label="Sağ kaydır"
          className="absolute top-1/2 right-0 -translate-y-1/2 p-2 rounded-full
            hover:text-purple-600 transition
            text-[#52357b] dark:text-[#e3de61] z-20"
        >
          <HiChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}
