export interface Category {
  id: number;
  name: string;
  image: string;
}

export const categories: Category[] = [
  { id: 1, name: "Konser", image: "/images/category/concert.jpg" },
  { id: 2, name: "Tiyatro", image: "/images/category/theatre.jpg" },
  { id: 3, name: "Sergi", image: "/images/category/sergi.jpg" },
  { id: 4, name: "Atölye", image: "/images/category/workshop.jpg" },
  { id: 5, name: "Sinema", image: "/images/category/cinema.jpeg" },
  { id: 6, name: "Edebiyat", image: "/images/category/edebiyat.jpg" },
  { id: 7, name: "Festival", image: "/images/category/festival.jpg" },
  { id: 8, name: "Doğa Gezisi", image: "/images/category/hiking.jpg" },
  { id: 9, name: "Fotoğrafçılık", image: "/images/category/photography.jpg" },
  { id: 10, name: "Yarışma", image: "/images/category/race.jpg" },
  { id: 11, name: "Stand-Up", image: "/images/category/stand-up.jpg" },
  {
    id: 12,
    name: "Çocuk Etkinlikleri",
    image: "/images/category/children.jpg",
  },
  { id: 13, name: "Yoga", image: "/images/category/yoga.jpg" },
];
