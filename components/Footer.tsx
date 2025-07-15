"use client";

import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E3DE61] text-[#52357B] dark:bg-[#52357B] dark:text-[#E3DE61] py-10 mt-12 overflow-hidden rounded-t-2xl">
      <div className="max-w-7xl mx-auto px-4">
        {/* Masaüstü görünüm */}
        <div className="hidden md:flex justify-between items-start">
          {/* Sol: İkonlar + Linkler */}
          <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-wrap justify-center gap-4 text-xl">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="hover:scale-125 transition-transform" />
              </a>
              <a
                href="https://wa.me/905555555555"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="hover:scale-125 transition-transform" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="hover:scale-125 transition-transform" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="hover:scale-125 transition-transform" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="hover:scale-125 transition-transform" />
              </a>
            </div>
            {/* Mail Adresi */}
            <a
              href="mailto:info@activityapp.com"
              className="text-sm hover:underline"
              aria-label="Send email to info@activityapp.com"
            >
              info@activityapp.com
            </a>
            <div className="flex flex-wrap gap-6 text-sm justify-center">
              <Link href="/#etkinlikler" className="hover:underline">
                Etkinlikler
              </Link>
              <Link href="/favorites" className="hover:underline">
                Favoriler
              </Link>
            </div>
          </div>

          {/* Orta: Açıklama + Telif */}
          <div className="max-w-sm space-y-3 text-sm text-center">
            <p>ActivityApp ile etkinliklerinizi kolayca takip edebilirsiniz.</p>
            <p className="opacity-70 text-xs">
              &copy; {new Date().getFullYear()} ActivityApp. Tüm hakları
              saklıdır.
            </p>
          </div>

          {/* Sağ: Logo */}
          <div className="text-xl font-bold self-center">
            <Link
              href="/#etkinlikler"
              className="text-xl font-bold text-[#52357B] dark:text-white select-none"
            >
              ActivityApp.
            </Link>
          </div>
        </div>

        {/* Mobil görünüm */}
        <div className="md:hidden flex flex-col items-center text-center space-y-6 overflow-hidden">
          {/* Logo */}
          <Link href="/#etkinlikler" className="text-xl font-bold">
            ActivityApp.
          </Link>

          {/* İkonlar */}
          <div className="flex flex-wrap justify-center gap-4 text-xl">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="hover:scale-125 transition-transform" />
            </a>
            <a
              href="https://wa.me/905555555555"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="hover:scale-125 transition-transform" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="hover:scale-125 transition-transform" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="hover:scale-125 transition-transform" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="hover:scale-125 transition-transform" />
            </a>
          </div>
          {/* Mail Adresi */}
          <a
            href="mailto:info@activityapp.com"
            className="text-sm hover:underline"
            aria-label="Send email to info@activityapp.com"
          >
            info@activityapp.com
          </a>
          {/* Linkler */}
          <div className="flex flex-wrap gap-6 text-sm justify-center">
            <Link href="/#etkinlikler" className="hover:underline">
              Etkinlikler
            </Link>
            <Link href="/favorites" className="hover:underline">
              Favoriler
            </Link>
          </div>

          {/* Açıklama + Telif */}
          <div className="max-w-xs text-sm space-y-2 mt-2">
            <p>ActivityApp ile etkinliklerinizi kolayca takip edebilirsiniz.</p>
            <p className="opacity-70 text-xs">
              &copy; {new Date().getFullYear()} ActivityApp. Tüm hakları
              saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
