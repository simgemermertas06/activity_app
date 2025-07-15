# Etkinlik Takip Paneli Uygulaması

## Proje Açıklaması

Bu proje, React ve Next.js tabanlı bir **Etkinlik Takip Uygulaması** dır.  
Kullanıcılar; farklı kategorilerdeki etkinlikleri filtreleyebilir, arama yapabilir, tarih aralığı seçebilir ve favorilerine etkinlik ekleyip çıkarabilirler.

## Proje Yapısı

- `/app`  
  Next.js sayfaları ve ana uygulama klasörü.

- `/components`  
  React bileşenleri (ActivityCard, FilterBar, CategorySlider vb.).

- `/context`  
  Uygulama genelinde kullanılan Context API dosyaları (Favoriler, Filtreler, Tema).

- `/constants`  
  Statik etkinlik ve kategori verilerini TypeScript ile tip güvenli şekilde tutar.

- `/public/images`  
  Proje içinde kullanılan statik resimler.

- `/global.css`  
  Projenin genel stil dosyaları (scroll ayarları, açık/koyu tema renkleri vb.).

- `/activity/[id]/page.tsx`  
  Dinamik etkinlik detay sayfası, "[id]" parametresi ile yönlendirme.

## Kurulum Adımları:

- 1. Depoyu klonlayın:
     git clone https://github.com/simgemermertas06/activity_app.git

- 2. Proje klasörüne gidin:
     cd activity_app

- 3. Gerekli paketleri yükleyin:
     npm install _veya_ yarn

- 4. Geliştirme sunucusunu başlatın:
     npm run dev _veya_ yarn dev

- 5. Tarayıcıda http://localhost:3000 adresini açın

## Kullanılan Teknolojiler:

- **Next.js** — React tabanlı, sunucu tarafı render ve statik site oluşturma framework'ü.
- **React** — Kullanıcı arayüzü geliştirmek için kullanılan JavaScript kütüphanesi.
- **TypeScript** — JavaScript'e tip güvenliği ekleyen programlama dili.
- **Tailwind CSS** — Utility-first CSS framework ile hızlı ve esnek stil oluşturma.
- **React Context API** — Global state yönetimi için React’in yerleşik çözümü.
- **react-icons** — Projede ikon kullanımı için gereken React ikon kütüphanesi.
- **AOS (Animate On Scroll)** — Sayfa scroll animasyonları için kullanılan kütüphane.
- **localStorage** — Favori etkinliklerin tarayıcıda saklanması için kullanılan Web API.
