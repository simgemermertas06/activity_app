"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "../app/context/ThemeContext";
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from "react-icons/md";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); //tema fonksiyonu için
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); //mobil menu durumu

  const handleMobileMenuToggle = () => {
    //mobil menüyü aç/kapa
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 bg-[#E3DE61] dark:bg-[#52357B] text-[#52357B] shadow-md transition-colors duration-300 rounded-b-2xl opacity-100"
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-anchor-placement="top-top"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Masaüstü Navbar */}
        <div className="hidden md:flex h-16 items-center justify-between">
          {/* Sol: Tema Toggle */}
          <div>
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-md bg-gray-200 dark:bg-[#5459AC] hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {theme === "light" ? (
                <MdDarkMode className="text-[#52357B]" size={24} />
              ) : (
                <MdLightMode className="text-yellow-400" size={24} />
              )}
            </button>
          </div>

          {/* Orta: Linkler */}
          <div className="flex space-x-8 justify-center">
            <Link
              href="/#etkinlikler"
              className={`
                relative
                text-[#52357B] dark:text-white font-medium
                transition
                before:absolute before:bottom-0 before:left-0 before:h-full before:w-0
                before:rounded-md
                before:bg-[#52357B] dark:before:bg-[#E3DE61]
                before:z-[-1]
                hover:text-white dark:hover:text-[#52357B]
                hover:before:w-full
                before:transition-all before:duration-500 before:ease-in-out
                px-4 py-2
              `}
            >
              Etkinlikler
            </Link>

            <Link
              href="/favorites"
              className={`
                relative
                text-[#52357B] dark:text-white font-medium
                transition
                before:absolute before:bottom-0 before:left-0 before:h-full before:w-0
                before:rounded-md
                before:bg-[#52357B] dark:before:bg-[#E3DE61]
                before:z-[-1]
                hover:text-white dark:hover:text-[#52357B]
                hover:before:w-full
                before:transition-all before:duration-500 before:ease-in-out
                px-4 py-2
              `}
            >
              Favoriler
            </Link>
          </div>

          {/* Sağ: Logo */}
          <div className="flex-shrink-0 ml-8">
            <Link
              href="/#etkinlikler"
              className="text-xl font-bold text-[#52357B] dark:text-white select-none"
            >
              ActivityApp.
            </Link>
          </div>
        </div>

        {/* Mobil Navbar */}
        <div className="flex md:hidden h-16 items-center justify-between">
          {/* Sol: Menü + Tema Toggle */}
          <div className="flex items-center gap-2">
            {/* Menü */}
            <button
              onClick={handleMobileMenuToggle}
              aria-label="Toggle Menu"
              className="p-2 w-10 h-10 rounded-md text-[#52357B] dark:text-white transition duration-300 relative"
            >
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform ${
                  isMobileMenuOpen
                    ? "opacity-0 scale-90 rotate-45"
                    : "opacity-100 scale-100 rotate-0"
                }`}
              >
                <MdMenu size={28} />
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 transform ${
                  isMobileMenuOpen
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-90 -rotate-45"
                }`}
              >
                <MdClose size={28} />
              </span>
            </button>

            {/* Tema */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-md bg-gray-200 dark:bg-[#5459AC] hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {theme === "light" ? (
                <MdDarkMode className="text-[#52357B]" size={24} />
              ) : (
                <MdLightMode className="text-yellow-400" size={24} />
              )}
            </button>
          </div>

          {/* Sağ: Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/#etkinlikler"
              className="text-xl font-bold text-[#52357B] dark:text-white select-none"
            >
              ActivityApp.
            </Link>
          </div>
        </div>

        {/* Mobil Menü (Animasyonlu Açılır Menü) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-40 mt-2" : "max-h-0"
          }`}
        >
          <div className="bg-[#6D4DAE] dark:bg-white rounded-md shadow-md py-2 px-4">
            <Link
              href="/#etkinlikler"
              className="block text-white dark:text-[#52357B] py-2 hover:text-[#E3DE61] dark:hover:text-[#E3DE61] transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Etkinlikler
            </Link>
            <Link
              href="/favorites"
              className="block text-white dark:text-[#52357B] py-2 hover:text-[#E3DE61] dark:hover:text-[#E3DE61] transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Favoriler
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
