"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Activity } from "@/app/constants/activityData";

// Favorileme işlemleri için context tipi oluşturduk
interface FavoritesContextType {
  favorites: Activity[]; //favorileri dizide tut
  toggleFavorite: (activity: Activity) => void; //favori ekle çıkar
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
); //favoriContext in başlangıç değeri undefined

// FavoritesProvider Tüm uygulamaya favoriler verisini sağlar.
export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<Activity[]>([]);
  //favori etkinlikleri tuuttuğumuz dizi için state tanımı yapıyoruz

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []); //sayfa yenilendiğinde localStorage'dan favorileri getiriyrouz

  const toggleFavorite = (activity: Activity) => {
    //favori butonuna tıklama fonks.
    setFavorites((prev) => {
      let updatedFavorites;
      // Eğer daha önce favoriye eklenmişse çıkar
      if (prev.find((item) => item.id === activity.id)) {
        updatedFavorites = prev.filter((item) => item.id !== activity.id);
      } else {
        // Yoksa ekle
        updatedFavorites = [...prev, activity];
      }
      // favorileri localStorage'a kaydediyoruz
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

//oluşturduğumuz hook Contexte erişiyor
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    //provider kullanılmadıgında hata gönedrir(güvenlik için)
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
