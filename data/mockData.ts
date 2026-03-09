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
  email2: string;
  instagram: string;
  address: string;
  city: string;
  workingHours: string;
  googleMapsUrl: string;
  googleMapsEmbed: string;
}

// Site Configuration - GERÇEK BİLGİLER
export const siteConfig = {
  name: "Fizyoterapist Kadir TEMEL",
  nameShort: "Fzt. Kadir TEMEL",
  tagline: "Fizyoterapi ve Danışmanlık Merkezi",
  description: "Antalya Muratpaşa'da IKOMT, Schroth Method Skolyoz Rehabilitasyonu ve kaliteli fizyoterapi hizmeti. Bilimsel temelli, modern ve efektif tedavi yaklaşımı.",
};

// Navigation
export const navLinks: NavLink[] = [
  { label: "Anasayfa", href: "#hero" },
  { label: "Hizmetler", href: "#services" },
  { label: "Hakkımızda", href: "#about" },
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
    title: "Akut ve Kronik Ağrı Yönetimi (IKOMT ADVANCED THERAPIST)",
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
    title: "Skolyoz/Kifoz (ISST SCHROTH METHOD)",
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
    title: "Sporcu Rehabilitasyonu",
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
    id: "ikomt-advanced-cert",
    title: "IKOMT Advanced Practitioner",
    organization: "Uluslararası IKOMT Akademisi",
    description: "IKOMT ileri seviye klinik uzmanlık programı tamamlayarak IKOMT Advanced Practitioner ünvanını almıştır.",
    icon: "Award",
  },
  {
    id: "schroth-cert",
    title: "ISST Schroth Therapist",
    organization: "International Schroth Society (ISST)",
    description: "Skolyoz ve kifoz rehabilitasyonunda dünyada en çok kabul gören 3 boyutlu spesifik düzeltici egzersiz metodunda uluslararası terapist sertifikası.",
    icon: "Award",
  },
  {
    id: "manuel-cert",
    title: "Manuel Terapi Uzmanlığı",
    organization: "Fizyoterapi Derneği",
    description: "Eklem mobilizasyonu ve manipülasyon tekniklerinde kapsamlı klinik eğitim ve uzmanlaşma.",
    icon: "Award",
  },
];

export interface TherapyStep {
  step: number;
  icon: string;
  title: string;
  description: string;
  details: string[];
}

export interface AboutSection {
  title: string;
  subtitle: string;
  clinicDescription: string;
  foundedYear: string;
}

export interface CareerStep {
  year: string;
  title: string;
  description: string;
}

// Team Members
export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Fzt. Kadir Temel",
    title: "Kurucu Fizyoterapist",
    specialization: "IKOMT Advanced Practitioner · ISST Schroth Therapist",
    image: "/kadirtemel.webp",
    bio: "Süleyman Demirel Üniversitesi Fizik Tedavi ve Rehabilitasyon Bölümü'nden 2014 yılında mezun olmuştur. Üniversite eğitimi sırasında Erasmus+ öğrenci değişim programıyla gittiği Polonya'nın Opole Politechnika Opolska Üniversitesi'nde farklı bir mesleki bakış açısı kazanmıştır. Ortopedik, nörolojik, spor yaralanmaları ve pediatrik yaklaşımlarla ilgili Türkiye'nin önde gelen birçok kurumunda staj yaparak kendini geliştirmiştir. 2023 yılında Antalya Muratpaşa'da kurduğu klinikte bilimsel temelli fizyoterapi hizmeti sunmaya devam etmektedir.",
  },
];

// Kariyer Zaman Çizelgesi
export const careerSteps: CareerStep[] = [
  {
    year: "2014",
    title: "Mezuniyet & Erasmus+",
    description: "Süleyman Demirel Üniversitesi Fizik Tedavi ve Rehabilitasyon Bölümü mezuniyeti. Erasmus+ programıyla Polonya Opole Politechnika Opolska Üniversitesi'nde eğitim.",
  },
  {
    year: "2014–2018",
    title: "Ortopedik & Pediatrik Rehabilitasyon",
    description: "Özel bir tıp merkezinde ortopedik, pediatrik ve nörolojik rehabilitasyon alanında klinik deneyim.",
  },
  {
    year: "2018–2022",
    title: "Skolyoz & Modern Ağrı Yönetimi",
    description: "Özel klinik bünyesinde skolyoz rehabilitasyonu ve modern ağrı yönetimi alanında uzmanlaşma.",
  },
  {
    year: "2023",
    title: "Klinik Kuruluşu",
    description: "Antalya Muratpaşa'da Fizyoterapi ve Danışmanlık Merkezi'ni kurdu.",
  },
  {
    year: "2025",
    title: "IKOMT Advanced Practitioner",
    description: "IKOMT ileri seviye klinik uzmanlık programı tamamlayarak IKOMT Advanced Practitioner ünvanını almıştır.",
  },
];

// Terapi Süreci
export const therapySteps: TherapyStep[] = [
  {
    step: 1,
    icon: "ClipboardList",
    title: "İlk Tetkik ve Değerlendirme",
    description: "Sizi tanımak ve probleminizi anlamak için kapsamlı bir değerlendirme yapılır.",
    details: [
      "Detaylı anamnez ve şikayet analizi",
      "Postür ve hareket değerlendirmesi",
      "Fonksiyonel testler",
      "Kişiye özel tedavi planı oluşturma",
    ],
  },
  {
    step: 2,
    icon: "HandMetal",
    title: "Manuel Terapi",
    description: "Uzman eller ile eklem ve kas dokusuna yönelik özel teknikler uygulanır.",
    details: [
      "Eklem mobilizasyonu ve manipülasyonu",
      "Yumuşak doku teknikleri",
      "IKOMT ağrı terapi yöntemleri",
      "Skolyoz için Schroth egzersizleri",
    ],
  },
  {
    step: 3,
    icon: "Zap",
    title: "Fizik Tedavi & Egzersiz",
    description: "Kişiye özel egzersiz programları ve gerektiğinde fizik tedavi modaliteleri uygulanır.",
    details: [
      "Kişiye özel terapötik egzersiz programı",
      "Klinik Pilates & Reformer",
      "Kinezyolojik bantlama",
      "Ev egzersiz programı ve eğitimi",
    ],
  },
];

// Vizyon & Misyon
export interface VisionMission {
  vision: { title: string; text: string };
  mission: { title: string; text: string };
}

export const visionMission: VisionMission = {
  vision: {
    title: "VİZYONUMUZ",
    text: "Bilimsel temele dayanan, etik değerlere bağlı ve bütüncül değerlendirme odaklı fizyoterapi anlayışını istikrarlı bir mesleki duruş olarak sürdürüp danışanlarının yaşam kalitesini yükseltmektir.",
  },
  mission: {
    title: "MİSYONUMUZ",
    text: "Her bireyi kendi klinik özellikleri içinde ele alarak, planlı ve kişiye özgü fizyoterapi sürecini profesyonel sorumluluk bilinciyle yürütürken uluslararası ölçekte referans kabul edilen bir fizyoterapi merkezi olmaktır.",
  },
};

// Özel İlgi Alanları
export const specialInterestAreas: string[] = [
  "Omuz rehabilitasyonu",
  "Diz rehabilitasyonu",
  "Omurga sağlığı (skolyoz, kifoz)",
  "El, el bileği rehabilitasyonu",
  "Kronik ağrı tedavisi",
];

// Hakkımızda Bölümü
export const aboutSection: AboutSection = {
  title: "Bizi Tanıyın",
  subtitle: "Bilimsel temelli fizyoterapi anlayışıyla danışanlarımıza bütüncül bir iyilik hali sunuyoruz.",
  clinicDescription: "Antalya Muratpaşa'da Nisan 2023'te kurulan merkezimiz, kaliteli fizyoterapi hizmeti sunmayı hedeflemektedir. Alanında uzman fizyoterapistlerin klinik deneyimleri bilime dayalı fizyoterapi yöntemleriyle harmanlanır.",
  foundedYear: "2023",
};

// Contact Information - GERÇEK BİLGİLER
export const contactInfo: ContactInfo = {
  phone: "+90 542 147 66 70",
  whatsapp: "+905421476670",
  email: "fizikend@gmail.com",
  email2: "abdulkadirtemel@gmail.com",
  instagram: "https://www.instagram.com/fizikend/",
  address: "Şirinyalı Mahallesi 1487. Sk. No:23/A",
  city: "Muratpaşa/ANTALYA",
  workingHours: "Pzt-Cum: 09:00 - 20:00 | Cmt: 09:00 - 17:00",
  googleMapsUrl: "https://maps.app.goo.gl/cyPYoaevdTZTViMh6",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.0295544635032!2d30.7383692!3d36.865711399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39bf7164993fb%3A0x571c0053caf07068!2sFizyoterapist%20Kadir%20Temel%20%7C%20FizikEND%20Klinik!5e0!3m2!1str!2str!4v1770559222251!5m2!1str!2str",
};

// Statistics - YASAL UYUMLU (Garanti içermeyen)
export const statistics = [
  { value: "10+", label: "Uzmanlık Alanı" },
  { value: "IKOMT", label: "Sertifikalı Merkez" },
  { value: "Schroth", label: "Method Uygulayıcısı" },
  { value: "Muratpaşa", label: "Antalya" },
];

// Gallery
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  alt_en: string;
  category: "klinik" | "terapi" | "ekipman" | "etkinlik";
  category_en: "clinic" | "therapy" | "equipment" | "event";
  featured: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop",
    alt: "Klinik — Resepsiyon Alanı",
    alt_en: "Clinic — Reception Area",
    category: "klinik",
    category_en: "clinic",
    featured: true,
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
    alt: "Manuel Terapi Uygulaması",
    alt_en: "Manual Therapy Session",
    category: "terapi",
    category_en: "therapy",
    featured: true,
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&auto=format&fit=crop",
    alt: "Reformer Pilates Ekipmanı",
    alt_en: "Reformer Pilates Equipment",
    category: "ekipman",
    category_en: "equipment",
    featured: true,
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop",
    alt: "Tedavi Seansı",
    alt_en: "Treatment Session",
    category: "terapi",
    category_en: "therapy",
    featured: false,
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop",
    alt: "Klinik Tedavi Odası",
    alt_en: "Clinic Treatment Room",
    category: "klinik",
    category_en: "clinic",
    featured: false,
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=800&auto=format&fit=crop",
    alt: "Sportif Rehabilitasyon",
    alt_en: "Sports Rehabilitation",
    category: "terapi",
    category_en: "therapy",
    featured: false,
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1593476087123-36d1de271f08?w=800&auto=format&fit=crop",
    alt: "Fizyoterapi Ekipmanları",
    alt_en: "Physiotherapy Equipment",
    category: "ekipman",
    category_en: "equipment",
    featured: false,
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&auto=format&fit=crop",
    alt: "Egzersiz ve Danışmanlık",
    alt_en: "Exercise & Consultation",
    category: "terapi",
    category_en: "therapy",
    featured: true,
  },
];

export const gallerySectionData = {
  title: "Galeri",
  title_en: "Gallery",
  subtitle: "Kliniğimizden ve tedavi süreçlerimizden kareler",
  subtitle_en: "Moments from our clinic and treatment processes",
  categories: [
    { key: "tumu", label: "Tümü", label_en: "All" },
    { key: "klinik", label: "Klinik", label_en: "Clinic" },
    { key: "terapi", label: "Terapi", label_en: "Therapy" },
    { key: "ekipman", label: "Ekipman", label_en: "Equipment" },
  ],
};

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
