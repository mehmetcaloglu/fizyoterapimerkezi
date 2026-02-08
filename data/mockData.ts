export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  backgroundImage: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
}

export interface PainPoint {
  id: string;
  label: string;
  position: { x: number; y: number };
  view: "front" | "back";
  condition: string;
  description: string;
  recommendedTherapy: string;
  duration: string;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  specialization: string;
  image: string;
  bio: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  workingHours: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
}

// Site Configuration - GERÇEK BİLGİLER
export const siteConfig = {
  name: "FizikEND",
  tagline: "Fizyoterapi ve Danışmanlık Merkezi",
  description: "Antalya Lara'da IKOMT, Schroth Method Skolyoz Rehabilitasyonu ve kaliteli fizyoterapi hizmeti. Bilimsel temelli, modern ve efektif tedavi yaklaşımı.",
};

// Navigation
export const navLinks: NavLink[] = [
  { label: "Anasayfa", href: "#hero" },
  { label: "Hizmetler", href: "#services" },
  { label: "Ağrı Haritası", href: "#pain-map" },
  { label: "Sertifikalar", href: "#certifications" },
  { label: "İletişim", href: "#contact" },
];

// Hero Section
export const heroContent: HeroContent = {
  title: "Harekete Özgürlük Kat",
  subtitle: "Bilimsel temelli, modern ve efektif fizyoterapi yaklaşımı ile kas-iskelet ve sinir sistemi problemlerinize çözüm sunuyoruz.",
  primaryCta: "Randevu Al",
  secondaryCta: "Hizmetlerimiz",
  backgroundImage: "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&w=2000&auto=format&fit=crop",
};

// Services - GERÇEK HİZMETLER (Eski siteden detaylı açıklamalarla)
export const services: Service[] = [
  {
    id: "ikomt",
    icon: "Brain",
    title: "IKOMT Ağrı Terapisi",
    description: "Klinik odaklı multiboyutlu ağrı terapisi ile bütüncül bir yaklaşım.",
    fullDescription: "IKOMT, ağrıların azaltılmasına veya uzun vadede ortadan kaldırılmasına yönelik geliştirilmiş bir terapi ve eğitim konseptidir. İnsan bir bütün olarak değerlendirilir; fizyolojik, mental, duygusal ve psikososyal etkenler birlikte ele alınır.",
    features: [
      "Biyopsikososyal yaklaşım",
      "Kişiye özgü problem analizi",
      "Hareket kısıtlılığını ortadan kaldırma",
      "Kronik ağrı yönetimi"
    ],
  },
  {
    id: "skolyoz",
    icon: "Activity",
    title: "Skolyoz Rehabilitasyonu",
    description: "Schroth Method ile 3 boyutlu düzeltici egzersizler.",
    fullDescription: "Omurganın 3 boyutlu eğrilmesi olan skolyoz tedavisinde, bilimsel olarak dünyaca kabul görmüş Schroth Method egzersizleri üzerine uzmanlaşmış fizyoterapistlerimiz kişinin eğriliğine göre egzersiz programları dizayn eder ve uygular.",
    features: [
      "ISST Schroth Method sertifikalı",
      "3 boyutlu düzeltici egzersizler",
      "Kifoz rehabilitasyonu",
      "Kişiye özel egzersiz programı"
    ],
  },
  {
    id: "manuel-terapi",
    icon: "Hand",
    title: "Manuel Terapi",
    description: "Elle uygulanan özel tekniklerle eklem ve kas problemlerine çözüm.",
    fullDescription: "Elle uygulanan özel tekniklerden oluşan, bu konuda eğitim almış uzmanlar tarafından uygulanan tecrübe ve klinik beceri gerektiren bir tedavi yöntemidir. Eklem hareketini artırır, kasları gevşetir, dolaşımı artırır ve ağrıyı azaltır.",
    features: [
      "Eklem mobilizasyonu",
      "Kas gevşetme teknikleri",
      "Dolaşım artırma",
      "İyileşmeyi stimüle etme"
    ],
  },
  {
    id: "sportif-rehabilitasyon",
    icon: "Dumbbell",
    title: "Sportif Rehabilitasyon",
    description: "Sporcuların güvenli ve hızlı bir şekilde sahaya dönüşü için özel programlar.",
    fullDescription: "Sportif aktivite esnasında sakatlanan sporcunun güvenli bir şekilde spora dönüşünü sağlamak için uygulanan rehabilitasyon programıdır. Yaralanma riski ve performans belirlenir, kişiye özgü koruyucu egzersiz programı düzenlenir.",
    features: [
      "Sakatlık sonrası değerlendirme",
      "Performans analizi",
      "Sahaya dönüş protokolü",
      "Sakatlık önleme programı"
    ],
  },
  {
    id: "ortopedik-rehabilitasyon",
    icon: "Zap",
    title: "Ortopedik Rehabilitasyon",
    description: "Kas-iskelet sistemi problemlerine bilimsel temelli fizyoterapi çözümleri.",
    fullDescription: "Kas, kemik, eklem, ligament, tendon, kıkırdak ve sinir gibi bölümlerden oluşan kas-iskelet sistemini ilgilendiren sağlık problemlerinin çözümüne yönelik uygulanan fizyoterapi uygulamalarıdır.",
    features: [
      "Boyun ve bel fıtığı tedavisi",
      "Omuz problemleri",
      "Diz ve menisküs sorunları",
      "Ayak bileği burkulmaları"
    ],
  },
  {
    id: "cerrahi-rehabilitasyon",
    icon: "Heart",
    title: "Cerrahi Öncesi ve Sonrası Rehabilitasyon",
    description: "Ameliyat öncesi hazırlık ve sonrası iyileşme sürecini hızlandıran programlar.",
    fullDescription: "Cerrahi öncesi fizyoterapiye hazırlanma ve cerrahi sonrası oluşan ödem, ağrı ve fonksiyon kaybının azaltılması için uygulanan rehabilitasyon programıdır. İyi bir cerrahi sonrası fizyoterapi, iyileşme süresini kısaltır.",
    features: [
      "Cerrahi öncesi hazırlık",
      "Yara iyileşme sürecini kısaltma",
      "Ödem ve ağrı kontrolü",
      "Fonksiyonel kapasite restorasyonu"
    ],
  },
  {
    id: "egzersiz-danismanligi",
    icon: "Dumbbell",
    title: "Egzersiz Danışmanlığı",
    description: "Uzman fizyoterapist eşliğinde, sakatlanma riskini azaltan kişiye özel programlar.",
    fullDescription: "Spora başlamadan veya antrenman yoğunluğunu artırmadan önce uzman fizyoterapist değerlendirmesi ile kişiye özgü, sakatlıklara sebep olmadan güvenli sınırlar içinde egzersiz programları oluşturulur.",
    features: [
      "Kişiye özel egzersiz programı",
      "Güvenli antrenman sınırları",
      "Sakatlık önleme odaklı",
      "Maksimum fayda hedefi"
    ],
  },
  {
    id: "koruyucu-fizyoterapi",
    icon: "Heart",
    title: "Koruyucu Fizyoterapi",
    description: "Sağlığınızı korumak ve yaşam kalitenizi artırmak için önleyici yaklaşım.",
    fullDescription: "Herhangi bir rahatsızlık olmadan kişinin yaşam kalitesini artırmak ve sağlığını korumasını sağlamak amacıyla bireysel özellikleri ve ihtiyaçları göz önüne alınarak hazırlanan egzersiz ve eğitim programıdır.",
    features: [
      "Yaşam kalitesini artırma",
      "Kişiye özel program",
      "Sağlık koruma odaklı",
      "Detaylı değerlendirme ve analiz"
    ],
  },
  {
    id: "kinezyolojik-bantlama",
    icon: "Zap",
    title: "Kinezyolojik Bantlama",
    description: "Ağrı kontrolü ve hareket kısıtlılığına özel bantlama teknikleri.",
    fullDescription: "Kas-iskelet sistemi yaralanma ve ağrı problemleri sebebiyle ortaya çıkan ödem ve hareket kısıtlılığı için kişinin şikayetlerine yönelik en uygun bantlama tekniği uzman fizyoterapistler tarafından uygulanır.",
    features: [
      "Ödem kontrolü",
      "Ağrı azaltma",
      "Hareket açıklığı artırma",
      "Sporcuya özel uygulamalar"
    ],
  },
  {
    id: "klinik-pilates",
    icon: "Activity",
    title: "Klinik Pilates & Reformer",
    description: "Fizyoterapist gözetiminde postür düzeltici ve güçlendirici egzersizler.",
    fullDescription: "Fizyoterapist eşliğinde uygulanan klinik pilates ve reformer egzersizleri ile core güçlendirme, esneklik artırma ve postür iyileştirme sağlanır. Tedavi amaçlı pilates uygulamalarıdır.",
    features: [
      "Fizyoterapist eşliğinde",
      "Reformer egzersizleri",
      "Core güçlendirme",
      "Postür iyileştirme"
    ],
  },
];

// Pain Map Points - Yeni görsellere uygun pozisyonlar
export const painPoints: PainPoint[] = [
  {
    id: "tension-headache",
    label: "Baş ve Ense",
    position: { x: 50, y: 6 },
    view: "back",
    condition: "Servikojenik (Boyun Kaynaklı) Baş Ağrısı",
    description: "Boyun kaslarındaki gerginliğin başın arka kısmından şakaklara doğru yaydığı, migrenle karışabilen ağrılardır.",
    recommendedTherapy: "IKOMT Ağrı Terapisi ve Kraniosakral Terapi",
    duration: "Değerlendirme sonrası belirlenir",
  },
  {
    id: "tmj-jaw",
    label: "Çene Eklemi",
    position: { x: 55, y: 8 },
    view: "front",
    condition: "TME Disfonksiyonu (Bruksizm)",
    description: "Diş sıkma, gıcırdatma kaynaklı çene ekleminden ses gelmesi, ağrı ve ağız açmada kısıtlılık durumudur.",
    recommendedTherapy: "Temporomandibular Eklem (TME) Manuel Terapisi",
    duration: "Değerlendirme sonrası belirlenir",
  },
  {
    id: "neck",
    label: "Boyun",
    position: { x: 50, y: 12 },
    view: "front",
    condition: "Boyun Ağrısı / Servikal Problemler",
    description: "Uzun süreli masa başı çalışma, yanlış postür ve stres kaynaklı boyun ağrıları ve sertliği.",
    recommendedTherapy: "Manuel terapi, IKOMT ve postür düzeltme egzersizleri",
    duration: "Değerlendirme sonrası belirlenir",
  },
  {
    id: "upper-trap",
    label: "Omuz ve Boyun",
    position: { x: 32, y: 14 },
    view: "front",
    condition: "Trapez Kas Spazmı (Fibromiyalji)",
    description: "Stres ve masa başı çalışmaya bağlı omuz başlarında hissedilen sertlik ve yanıcı ağrılardır.",
    recommendedTherapy: "Klinik Masaj ve Tetik Nokta Terapisi",
    duration: "Değerlendirme sonrası belirlenir",
  },
  {
    id: "shoulder",
    label: "Omuz",
    position: { x: 28, y: 18 },
    view: "front",
    condition: "Omuz Problemleri",
    description: "Donuk omuz, sıkışma sendromu ve hareket kısıtlılığı. Spor yaralanmaları veya aşırı kullanım sonucu oluşabilir.",
    recommendedTherapy: "Manuel terapi, eklem mobilizasyonu ve güçlendirme egzersizleri",
    duration: "Değerlendirme sonrası belirlenir",
  },
  {
    id: "thoracic-pain",
    label: "Kürek Kemiği Arası",
    position: { x: 50, y: 25 },
    view: "back",
    condition: "Torakal Blokaj / Kulunç Ağrısı",
    description: "Duruş bozukluğu ve stres kaynaklı, sırtta batma ve nefes alırken kısıtlılık hissi yaratan kas spazmlarıdır.",
    recommendedTherapy: "Manuel Terapi, Kupa Terapisi ve Postür Egzersizleri",
    duration: "Değerlendirme sonrası belirlenir",
  },
  {
    id: "scoliosis-spine",
    label: "Omurga Eğriliği",
    position: { x: 50, y: 35 },
    view: "back",
    condition: "Adolesan İdiyopatik Skolyoz",
    description: "Omurganın sağa veya sola eğriliği ile omuz ve bel eşitsizliği yaratan duruş bozukluğudur.",
    recommendedTherapy: "Schroth Method (3 Boyutlu Skolyoz Egzersizleri)",
    duration: "Uzun süreli takip gerektirir",
  },
  {
    id: "lumbar-hernia",
    label: "Bel Bölgesi",
    position: { x: 50, y: 45 },
    view: "back",
    condition: "Lomber Disk Hernisi (Bel Fıtığı)",
    description: "Belden bacağa vuran ağrı, uyuşma ve karıncalanma ile kendini gösteren sinir kökü basısı durumudur.",
    recommendedTherapy: "IKOMT ve Mekanik Tanı Tedavi (McKenzie)",
    duration: "Değerlendirme sonrası belirlenir",
  },
  {
    id: "psoas-hip",
    label: "Kalça Ön / Kasık",
    position: { x: 43, y: 42 },
    view: "front",
    condition: "İliopsoas Tendiniti / Kalça Sıkışması",
    description: "Uzun süre oturma veya aşırı yüklenme sonucu kalça ön yüzünde hissedilen, yürümeyi zorlaştıran ağrılardır.",
    recommendedTherapy: "IKOMT Konsepti ve Mobilizasyon Egzersizleri",
    duration: "Değerlendirme sonrası belirlenir",
  },
  {
    id: "de-quervain",
    label: "El Bileği",
    position: { x: 22, y: 50 },
    view: "front",
    condition: "De Quervain Tenosinoviti",
    description: "Başparmağı kaldıran tendonların sıkışması sonucu, kavrama ve çevirme hareketlerinde oluşan keskin ağrıdır.",
    recommendedTherapy: "Manuel Terapi ve IKOMT Ağrı Terapisi",
    duration: "Değerlendirme sonrası belirlenir",
  },
  {
    id: "coccydynia",
    label: "Kuyruk Sokumu",
    position: { x: 50, y: 52 },
    view: "back",
    condition: "Koksidini (Kuyruk Sokumu Ağrısı)",
    description: "Düşme sonrası veya uzun süre sert zeminde oturmaya bağlı gelişen, oturup kalkarken artan hassasiyettir.",
    recommendedTherapy: "Manuel Terapi (Koksiks Manipülasyonu) ve Koruyucu Rehabilitasyon",
    duration: "Değerlendirme sonrası belirlenir",
  },
  {
    id: "acl-knee",
    label: "Diz Ön Bölgesi",
    position: { x: 42, y: 65 },
    view: "front",
    condition: "Ön Çapraz Bağ / Menisküs Yaralanması",
    description: "Spor aktiviteleri veya ani dönüşler sırasında dizde güvensizlik, boşalma hissi ve ağrı oluşumudur.",
    recommendedTherapy: "Cerrahi Öncesi/Sonrası Sportif Rehabilitasyon",
    duration: "Değerlendirme sonrası belirlenir",
  },
  {
    id: "lateral-ankle",
    label: "Ayak Bileği Dış Yan",
    position: { x: 38, y: 92 },
    view: "front",
    condition: "Lateral Ligaman Yaralanması",
    description: "Ayak bileğinin içe dönmesi sonucu dış yan bağlarda oluşan zedelenme, ödem ve hareket kısıtlılığıdır.",
    recommendedTherapy: "Sportif Rehabilitasyon ve Proprioseptif Egzersizler",
    duration: "Değerlendirme sonrası belirlenir",
  },
  {
    id: "plantar-fasiit",
    label: "Ayak Tabanı / Topuk",
    position: { x: 42, y: 95 },
    view: "back",
    condition: "Plantar Fasiit (Topuk Dikeni)",
    description: "Sabahları atılan ilk adımlarda şiddetli ağrı ve batma hissi ile karakterize ayak tabanı fasyası gerginliğidir.",
    recommendedTherapy: "Manuel Terapi, Kinezyolojik Bantlama ve Tabanlık Analizi",
    duration: "Değerlendirme sonrası belirlenir",
  },
];

// Sertifikalar ve Uzmanlık Alanları (Hasta yorumları yerine)
export const certifications: Certification[] = [
  {
    id: "ikomt-cert",
    title: "IKOMT Sertifikası",
    organization: "Uluslararası IKOMT Akademisi",
    description: "Klinik Odaklı Multiboyutlu Ağrı Terapisi alanında uluslararası geçerliliği olan sertifika.",
    icon: "Award",
  },
  {
    id: "schroth-cert",
    title: "ISST Schroth Method",
    organization: "International Schroth Society",
    description: "Skolyoz ve kifoz rehabilitasyonunda dünyada en çok kabul gören 3 boyutlu spesifik düzeltici egzersiz metodu.",
    icon: "Award",
  },
  {
    id: "manuel-cert",
    title: "Manuel Terapi Uzmanlığı",
    organization: "Fizyoterapi Derneği",
    description: "Eklem mobilizasyonu ve manipülasyon tekniklerinde uzmanlaşma.",
    icon: "Award",
  },
];

// Team Members - Gerçek bilgiler güncellenmeli
export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Fzt. Kadir Temel",
    title: "Kurucu Fizyoterapist",
    specialization: "IKOMT, Skolyoz Rehabilitasyonu",
    image: "https://i.pravatar.cc/300?img=14", // Gerçek fotoğraf ile değiştirilmeli
    bio: "IKOMT ve Schroth Method sertifikalı uzman fizyoterapist",
  },
];

// Contact Information - GERÇEK BİLGİLER
export const contactInfo: ContactInfo = {
  phone: "+90 542 147 66 70",
  whatsapp: "+905421476670",
  email: "fizikend@gmail.com",
  address: "Şirinyalı Mahallesi 1487. Sk. No:23/A",
  city: "Muratpaşa/ANTALYA",
  workingHours: "Pzt-Cum: 09:00 - 19:00 | Cmt: 09:00 - 14:00",
  googleMapsUrl: "https://maps.app.goo.gl/cyPYoaevdTZTViMh6",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.0295544635032!2d30.7383692!3d36.865711399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39bf7164993fb%3A0x571c0053caf07068!2sFizyoterapist%20Kadir%20Temel%20%7C%20FizikEND%20Klinik!5e0!3m2!1str!2str!4v1770559222251!5m2!1str!2str",
};

// Statistics - YASAL UYUMLU (Garanti içermeyen)
export const statistics = [
  { value: "10+", label: "Uzmanlık Alanı" },
  { value: "IKOMT", label: "Sertifikalı Merkez" },
  { value: "Schroth", label: "Method Uygulayıcısı" },
  { value: "Lara", label: "Antalya" },
];

// FAQ Data
export const faqs = [
  {
    id: "1",
    question: "Fizyoterapi seansları ne kadar sürer?",
    answer: "Standart bir fizyoterapi seansı 45-60 dakika arasında sürmektedir. Durumunuza göre süre değişiklik gösterebilir.",
  },
  {
    id: "2",
    question: "İlk değerlendirme nasıl yapılır?",
    answer: "İlk seansta detaylı bir anamnez alınır, fiziksel muayene yapılır ve size özel tedavi planı oluşturulur.",
  },
  {
    id: "3",
    question: "Skolyoz tedavisinde Schroth Method nedir?",
    answer: "Schroth Method, skolyoz ve kifoz rehabilitasyonunda dünyada en çok kabul gören 3 boyutlu spesifik düzeltici egzersiz modelidir.",
  },
  {
    id: "4",
    question: "Randevu almak için ne yapmalıyım?",
    answer: "Telefon veya WhatsApp üzerinden kolayca randevu alabilirsiniz.",
  },
  {
    id: "5",
    question: "IKOMT nedir?",
    answer: "IKOMT (Klinik Odaklı Multiboyutlu Ağrı Terapisi), biyopsikososyal yaklaşım temelinde kişiyi biyolojik, psikolojik ve sosyal yönleriyle değerlendiren bütüncül bir tedavi yaklaşımıdır.",
  },
];
