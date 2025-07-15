import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";
import AOSWrapper from "../components/AOSWrapper";
import { FilterProvider } from "@/app/context/FilterContext";
import { FavoritesProvider } from "@/app/context/FavoritesContext";

const fonts = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

//Head için metadatayı tanımlıyoruz
export const metadata: Metadata = {
  title: "Activity Tracking App",
  description:
    "Activity Tracking App using Next Js,Tailwind CSS and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.className} antialiased overflow-x-hidden`}>
        <ThemeProvider>
          <FilterProvider>
            <FavoritesProvider>
              <AOSWrapper />
              <Navbar />
              {/* sayfanın ana içeriği [children} ile gelecek */}
              <main className="pt-16 min-h-screen">{children}</main>
              <Footer />
            </FavoritesProvider>
          </FilterProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
