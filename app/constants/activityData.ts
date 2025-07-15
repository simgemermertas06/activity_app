export interface Activity {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  place: string;
  description: string;
  image: string;
  tags: string[];
  participantCount: number;
}

export const activities: Activity[] = [
  {
    id: 1,
    title: "İstanbul Müzik Festivali",
    category: "Konser",
    date: "2025-08-20",
    location: "İstanbul",
    place: "İstanbul Harbiye Cemil Topuzlu Açıkhava",
    tags: ["#müzik", "#canlı", "#festival"],
    participantCount: 1000,
    description:
      " İstanbul’un en köklü etkinliklerinden biri olan İstanbul Müzik Festivali, müzikseverleri yeniden bir araya getiriyor. Harbiye Cemil Topuzlu Açıkhava sahnesinde gerçekleşecek festivalde, eşsiz canlı performanslar müziğe doyuracak. Şehrin kalbinde, yaz akşamlarını müzikle taçlandırmak isteyen herkes için unutulmaz bir deneyim sunuyor.",
    image: "/images/activity/concert-1.jpg",
  },
  {
    id: 2,
    title: "Ankara Tiyatro Günleri",
    category: "Tiyatro",
    date: "2025-09-15",
    location: "Ankara",
    place: "Ankara Kültür Merkezi",
    tags: ["#tiyatro", "#canlı", "#sanat", "#gösteri", "#kültür"],
    participantCount: 750,
    description:
      " Ankara Tiyatro Günleri, Türkiye’nin en seçkin tiyatro topluluklarını sanatseverlerle buluşturuyor. Ankara Kültür Merkezi’nde gerçekleşecek bu özel etkinlikte, sahne sanatlarının en başarılı örnekleri sergilenecek. Tiyatro tutkunları için kaçırılmayacak bir kültür ve sanat deneyimi vadediyor.",
    image: "/images/activity/theatre-1.jpg",
  },
  {
    id: 3,
    title: "Afife Tiyatro Oyunu",
    category: "Tiyatro",
    date: "2025-08-10",
    location: "İstanbul",
    place: "İstanbul Zorlu PSM Sahne",
    tags: ["#tiyatro", "#canlı", "#performans", "#sanat", "#kültür"],
    participantCount: 780,
    description:
      " Afife Tiyatro Oyunu, Türkiye’nin en saygın tiyatro topluluklarından biri tarafından sahneleniyor. İstanbul’un en prestijli sahnelerinden Zorlu PSM’de izleyicilerle buluşacak bu oyun, tiyatroseverlere unutulmaz bir akşam vadediyor. Sanat ve duygunun buluştuğu bu özel gösteri, sahne sanatlarına ilgi duyan herkes için kaçırılmayacak bir fırsat.",
    image: "/images/activity/theatre-afife.jpg",
  },
  {
    id: 4,
    title: "İzmir Kitap Fuarı",
    category: "Edebiyat",
    date: "2025-10-05",
    location: "İzmir",
    place: "İzmir Fuar Alanı (Kültürpark)",
    tags: ["#kitap", "#fuar", "#edebiyat", "#okuma", "#yazarlar"],
    participantCount: 3500,
    description:
      "Türkiye’nin en köklü kitap fuarlarından biri olan İzmir Kitap Fuarı, binlerce kitap severi bir araya getiriyor. İzmir Fuar Alanı’nda gerçekleşecek etkinlikte yayınevleri, yazarlar ve okurlar buluşacak. Edebiyat dünyasının nabzını tutan fuar, kültür dolu bir atmosferde unutulmaz anlar sunuyor.",
    image: "/images/activity/edebiyat-izmir.jpg",
  },
  {
    id: 5,
    title: "Gaziantep Kitap Okuma Günleri",
    category: "Edebiyat",
    date: "2025-08-21",
    location: "Gaziantep",
    place: "Gaziantep Büyükşehir Belediyesi Kültür ve Kongre Merkezi",
    tags: ["#kitap", "#edebiyat", "#okuma", "#kültür", "#etkinlik"],
    participantCount: 800,
    description:
      "Gaziantep Kitap Okuma Günleri, edebiyatseverleri bir araya getiren özel bir etkinlik olarak dikkat çekiyor. Gaziantep Büyükşehir Belediyesi Kültür ve Kongre Merkezi’nde gerçekleşecek bu buluşmada, okuma kültürünü yaygınlaştırmaya yönelik birçok etkinlik yer alacak. Kitaplara ve okumaya gönül veren herkes için keyifli bir atmosfer sunuyor.",
    image: "/images/activity/edebiyat-1.jpg",
  },
  {
    id: 6,
    title: "Buz Devri 4",
    category: "Sinema",
    date: "2025-08-21",
    location: "İstanbul",
    place: "Cinemaximum Zorlu Center",
    tags: ["#sinema", "#animasyon", "#aile", "#film", "#gösterim"],
    participantCount: 250,
    description:
      "Dünyaca ünlü animasyon serisinin yeni filmi Buz Devri 4, İstanbul’da izleyicilerle buluşuyor. Cinemaximum Zorlu Center’da gerçekleşecek bu özel gösterimde, sinemaseverler hem eğlenceli hem de nostaljik anlar yaşayacak. Ailecek keyifle izlenebilecek bu film, yaz aylarına renk katacak.",
    image: "/images/activity/cinema-1.jpg",
  },
  {
    id: 7,
    title: "Geleneksel İstanbul Boğazı Kano Yarışları",
    category: "Yarışma",
    date: "2025-07-22",
    location: "İstanbul",
    place: "Üsküdar Sahili",
    tags: ["#spor", "#yarışma", "#kano", "#doğa", "#aktivite"],
    participantCount: 300,
    description:
      "Her yıl büyük bir heyecanla gerçekleşen Geleneksel İstanbul Boğazı Kano Yarışları, doğa ve spor tutkunlarını bir araya getiriyor. Üsküdar Sahili'nden başlayan yarış, Boğaz’ın eşsiz manzarası eşliğinde sürüyor. Katılımcılar için zorlu ama keyifli bir mücadele ortamı sunan etkinlik, izleyicilere de unutulmaz anlar yaşatıyor.",
    image: "/images/activity/race-1.jpg",
  },
  {
    id: 8,
    title: "Adana Portakal Çiçeği Festivali",
    category: "Festival",
    date: "2025-07-24",
    location: "Adana",
    place: "Adana Merkez Park",
    tags: ["#festival", "#müzik", "#kültür", "#etkinlik", "#adana"],
    participantCount: 4500,
    description:
      "Adana’nın en renkli ve coşkulu etkinliklerinden biri olan Portakal Çiçeği Festivali, 3-12 Nisan tarihleri arasında gerçekleşiyor. Adana Merkez Park’ta düzenlenen festival, doğanın ve kültürün buluştuğu benzersiz anlar sunuyor. Yerel müziklerden sanat gösterilerine kadar pek çok etkinlik, katılımcılara unutulmaz bir deneyim yaşatıyor.",

    image: "/images/activity/festival-adana.jpg",
  },
  {
    id: 9,
    title: "Pera Müzesi",
    category: "Sergi",
    date: "2025-08-13",
    location: "İstanbul",
    place: "Pera Müzesi",
    tags: ["#sergi", "#sanat", "#kültür", "#müze", "#koleksiyon"],
    participantCount: 600,
    description:
      "Pera Müzesi, zengin koleksiyonları ve önemli eserleriyle İstanbul’un kültür sanat hayatına yön veriyor. Yakın zamanda yeni ve özel eserlerin sergilenmeye başlanacağı müze, sanatseverler için kaçırılmayacak bir adres. Tarihi dokusuyla da büyüleyen mekan, ziyaretçilerine benzersiz bir deneyim sunuyor.",
    image: "/images/activity/sergi-1.jpg",
  },
  {
    id: 10,
    title: "Doğu Demirkol",
    category: "Stand-Up",
    date: "2025-09-28",
    location: "Ankara",
    place: "IF Performance Hall Ankara",
    tags: ["#standup", "#komedi", "#gösteri", "#canlı", "#eğlence"],
    participantCount: 650,
    description:
      "Ünlü komedyen Doğu Demirkol, Ankara’da stand-up gösterisiyle hayranlarıyla buluşuyor. IF Performance Hall Ankara’da gerçekleşecek bu etkinlik, kahkaha dolu unutulmaz anlar vaat ediyor. Komedi severler için kaçırılmayacak bu gösteri, şehrin eğlence hayatına renk katacak.",
    image: "/images/activity/standup-1.jpg",
  },
  {
    id: 11,
    title: "Tolgshow-Çılgın Sezon",
    category: "Stand-Up",
    date: "2025-10-15",
    location: "İstanbul",
    place: "Volkswagen Arena İstanbul",
    tags: ["#standup", "#komedi", "#gösteri", "#canlı", "#tiyatro"],
    participantCount: 4500,
    description:
      "Ünlü oyuncu ve komedyen Tolga Çevik, 'Tolgshow-Çılgın Sezon' ile İstanbul’da sahne alıyor. Volkswagen Arena İstanbul’daki bu gösteri, izleyicilere kahkaha dolu unutulmaz anlar yaşatacak. Komedi ve tiyatro severler için kaçırılmaması gereken bir etkinlik olarak dikkat çekiyor.",
    image: "/images/activity/standup-2.jpg",
  },
  {
    id: 12,
    title: "Ağrı Dağı Zirve Tırmanışı",
    category: "Doğa Gezisi",
    date: "2025-11-10",
    location: "Ağrı",
    place: "Ağrı Dağı Milli Parkı",
    tags: ["#doğa", "#tırmanış", "#macera", "#spor", "#etkinlik"],
    participantCount: 150,
    description:
      "Türkiye’nin en yüksek dağı olan Ağrı Dağı’nda gerçekleşen zirve tırmanışı, macera tutkunlarını bir araya getiriyor. Ağrı Dağı Milli Parkı sınırları içinde düzenlenen etkinlik, doğayla iç içe zorlu ama unutulmaz anlar vaat ediyor. Katılımcılar hem fiziksel hem de mental dayanıklılıklarını test ederken, eşsiz manzaraların keyfini çıkaracaklar.",
    image: "/images/activity/hiking-1.jpg",
  },
  {
    id: 13,
    title: "Karadeniz Turu",
    category: "Doğa Gezisi",
    date: "2025-11-03",
    location: "Trabzon",
    place: "Trabzon Meydan Parkı",
    tags: ["#doğa", "#tur", "#keşif", "#karadeniz", "#etkinlik"],
    participantCount: 200,
    description:
      "Karadeniz’in eşsiz doğasını keşfetmek isteyenler için düzenlenen Karadeniz Turu, Trabzon’dan başlıyor. Trabzon Meydan Parkı’nda başlayacak bu turda, bölgenin doğal güzellikleri ve kültürel zenginlikleri katılımcılarla buluşacak. Doğa severler için unutulmaz anılar ve keşif dolu bir yolculuk vaat ediyor.",
    image: "/images/activity/hiking-2.jpg",
  },
  {
    id: 14,
    title: "Çanak-Çömlek Atölyesi",
    category: "Atölye",
    date: "2025-07-17",
    location: "Nevşehir",
    place: "Avanos Çömlek Atölyeleri",
    tags: ["#atölye", "#çömlek", "#elSanatları", "#kapadokya", "#yaratıcılık"],
    participantCount: 60,
    description:
      "Kapadokya’nın meşhur Avanos ilçesinde düzenlenen Çanak-Çömlek Atölyesi, el sanatlarına meraklı herkesi bekliyor. Katılımcılar, geleneksel tekniklerle kendi eserlerini yaratma fırsatı buluyor. Hem kültürel hem de yaratıcı bir deneyim sunan bu atölye, Kapadokya ziyaretinizde kaçırılmaması gereken aktivitelerden biri.",
    image: "/images/activity/workshop-1.jpg",
  },
  {
    id: 15,
    title: "Rafadan Tayfa Gösteri Etkinliği",
    category: "Çocuk Etkinlikleri",
    date: "2025-07-18",
    location: "İstanbul",
    place: "Zorlu Performans Sanatları Merkezi",
    tags: ["#çocuk", "#gösteri", "#aile", "#eğlence", "#canlı"],
    participantCount: 800,
    description:
      "Popüler çocuk programı Rafadan Tayfa, Zorlu Performans Sanatları Merkezi’nde çocuklarla buluşuyor. Gösteri ve imza günü etkinliği, minik izleyicilere eğlenceli ve unutulmaz anlar yaşatacak. Aileler için keyifli ve interaktif bir etkinlik fırsatı sunuyor.",
    image: "/images/activity/children-2.jpg",
  },
  {
    id: 16,
    title: "Malatya Lunapark Açıldı",
    category: "Çocuk Etkinlikleri",
    date: "2025-08-01",
    location: "Malatya",
    place: "Malatya Yeşilyurt Lunapark",
    tags: ["#çocuk", "#lunapark", "#eğlence", "#aile", "#aktivite"],
    participantCount: 1200,
    description:
      "Malatya’da çocuklar için eğlence dolu bir mekan olan Yeşilyurt Lunapark kapılarını yeniden açıyor. Renkli oyun alanları ve eğlenceli aktivitelerle dolu lunapark, ailelerin ve çocukların uğrak noktası olmaya devam ediyor. Yaz aylarında çocuklara keyifli vakit geçirme imkanı sunuyor.",
    image: "/images/activity/children-1.jpg",
  },
  {
    id: 17,
    title: "Yoga Ve Pilates Etkinliği",
    category: "Yoga",
    date: "2025-09-05",
    location: "İstanbul",
    place: "Beykoz Korusu",
    tags: ["#yoga", "#pilates", "#spor", "#doğa", "#sağlık"],
    participantCount: 150,
    description:
      "İstanbul’un sakin ve doğal alanlarından Beykoz Korusu, yoga ve pilates severlere eşsiz bir ortam sunuyor. Doğa ile iç içe gerçekleşen bu etkinlik, katılımcıların hem bedenlerini hem de ruhlarını dinlendirmesine olanak sağlıyor. Sporun ve huzurun buluştuğu bu mekan, sağlıklı yaşam için harika bir tercih oluyor.",
    image: "/images/activity/yoga-1.jpg",
  },
];
