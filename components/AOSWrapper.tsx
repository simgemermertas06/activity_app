"use client";

//TODO: TÜM UYGULAMADA KULLANILACAK OLAN AOS TANIMLARI BURDA YAPIYORUZ

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";

const AOSWrapper = () => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // animasyon her scrollda tetiklenecek
      mirror: true, // sayfa yukarı inerken de animasyon olacak
      offset: 50,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [pathname]);

  return null;
};

export default AOSWrapper;
