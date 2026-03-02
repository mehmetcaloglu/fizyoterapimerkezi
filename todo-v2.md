# FizikEND Website — v2 Görev Listesi

Müşteri geri bildirimlerine göre yapılacak değişiklikler. Öncelik sırasına göre sıralanmıştır.

---

## 🟥 Kritik / Kolay (Hemen Yapılacak)

### 1. Ağrı Haritası Kaldırılacak ✅
- [x] `app/page.tsx` — `<PainMap />` bileşenini kaldır
- [x] `components/Navbar.tsx` — "Ağrı Haritası" nav linkini kaldır
- [x] `data/mockData.ts` — `navLinks`'ten "Ağrı Haritası" satırını kaldır
- [ ] `data/mockData.ts` — `PainPoint` interface ve `painPoints` dizisi silinebilir (isteğe bağlı)
- [ ] `components/PainMap.tsx` dosyası silinebilir (isteğe bağlı)

### 2. Adres Düzeltmesi ✅
- [x] `data/mockData.ts` — `siteConfig.description` içindeki "Lara" → "Muratpaşa"
- [x] `data/mockData.ts` — `statistics` dizisindeki `{ value: "Lara", label: "Antalya" }` → `{ value: "Muratpaşa", label: "Antalya" }`

### 3. Çalışma Saatleri Güncelleme ✅
- [x] `data/mockData.ts` — `contactInfo.workingHours` güncellendi (Pzt-Cum 20:00, Cmt 17:00)
- [x] `components/Footer.tsx` — Sabit yazılmış saatler güncellendi

### 4. E-posta Adresleri Güncelleme ✅
- [x] `data/mockData.ts` — `ContactInfo` interface'ine `email2` alanı eklendi
- [x] `data/mockData.ts` — `contactInfo.email2` = `"abdulkadirtemel@gmail.com"` eklendi
- [x] `components/Footer.tsx` — Her iki mail adresi gösteriliyor

### 5. CTA Slogan Değişikliği ✅
- [x] `app/page.tsx` — `"Değişime Hazır Mısın?"` → `"Hizmetlerimiz Hakkında Bilgi Alın"`
- [x] CTA alt metni reklam yönetmeliğine uygun hale getirildi

---

## 🟧 Orta Zorluk / Önemli

### 6. IKOMT Advanced Practitioner Vurgusu
- [ ] `data/mockData.ts` — `certifications` dizisinde IKOMT kartını güncelle:
  - Başlık: `"IKOMT Advanced Practitioner"`
  - Açıklama: Kur 1 (NMST) ve Kur 2 (Advanced) bilgisini ekle, Kadir Temel'in 2. kuru 2024'te tamamladığını vurgula
- [ ] `data/mockData.ts` — `statistics` dizisine IKOMT Advanced vurgusu eklenebilir
- [ ] Sertifikalar bölümünde bu kartı öne çıkar (ilk sıraya al, farklı stil)

### 7. Instagram Linki Ekleme ✅
- [x] `data/mockData.ts` — `ContactInfo` interface'ine `instagram: string` eklendi
- [x] `data/mockData.ts` — `contactInfo.instagram` = `"https://www.instagram.com/fizikend/"` eklendi
- [x] `components/Navbar.tsx` — Instagram ikonu eklendi (masaüstü sağ üst + mobil menü)
- [x] `components/Footer.tsx` — Sosyal medya bölümüne Instagram ikonu ve linki eklendi (lucide-react'teki mevcut Instagram ikonu kullanıldı)

### 8. "Hakkımızda / Biz Kimiz" Bölümü
- [ ] `data/mockData.ts` — `teamMembers[0]` verisini zenginleştir:
  - Gerçek biyografi (IKOMT 2 kur, Schroth, Manuel Terapi)
  - Eğitim ve uzmanlık bilgileri
  - Fotoğraf URL'si (gerçek fotoğraf gelince güncellenecek)
- [ ] `app/page.tsx` — Yeni "Hakkımızda" section ekle (Hizmetler ile Sertifikalar arasına)
  - Sol: Fiyaterapist fotoğrafı + isim + unvan
  - Sağ: Biyografi, uzmanlıklar listesi, sertifikalar özeti
- [ ] `data/mockData.ts` — `navLinks`'e "Hakkımızda" linki ekle

### 9. "Terapi Süreci Nasıl İşliyor?" Bölümü
- [ ] `data/mockData.ts` — `therapyProcess` adlı yeni dizi ekle:
  ```
  1. İlk Tetkik ve Değerlendirme
  2. Manuel Terapi
  3. Fizik Tedavi
  ```
- [ ] `app/page.tsx` — Yeni section ekle (Hero altına veya Hizmetler öncesine)
  - 3 adımlı süreç kartları (numaralı, ikon'lu)
  - Yeni hastalar için bilgilendirici ton

### 10. KVKK Aydınlatma Metni
- [ ] `app/kvkk/page.tsx` — Yeni sayfa oluştur
  - Standart KVKK aydınlatma metni (fizyoterapi merkezine uygun)
  - Veri sorumlusu: FizikEND / Kadir Temel
- [ ] `components/Footer.tsx` — KVKK linkini güncelle (`href="#"` → `href="/kvkk"`)

---

## 🟨 Orta-Uzun Vadeli

### 11. Galeri Bölümü
- [ ] Müşteriden gerçek klinik fotoğrafları temin edilecek
- [ ] `public/gallery/` klasörüne fotoğraflar eklenecek
- [ ] `data/mockData.ts` — `galleryImages` dizisi ekle
- [ ] `app/page.tsx` — Galeri section ekle (masonry veya grid layout)
- [ ] Lightbox (büyütme) özelliği ekle

### 12. İngilizce Dil Desteği
- [ ] `next.config.mjs` — `i18n` konfigürasyonu ekle (`tr`, `en`)
- [ ] `data/mockData.ts` → ayrı `mockData.en.ts` dosyası oluştur
- [ ] Tüm statik metinleri dil dosyalarına taşı
- [ ] Navbar'a dil seçici ekle (TR / EN toggle)
- [ ] `app/[lang]/` dizin yapısına geç veya `next-intl` paketi kullan

### 13. Mobil Snap Scroll Deneyimi
- [ ] `globals.css` veya sayfa bazında `scroll-snap-type` CSS ekle
- [ ] Her section'a `scroll-snap-align: start` uygula
- [ ] Mobil cihazlarda tam ekran section deneyimi test et
- [ ] Masaüstünde normal scroll davranışı korunacak (sadece mobilde aktif)

---

## 📝 Notlar

- **Reklam yönetmeliği:** Tüm metinlerde "garanti", "kesin iyileşme", "en iyi", "tedavi eder" gibi ifadelerden kaçınılacak. Bunlar yerine "destekler", "yardımcı olabilir", "değerlendirme" gibi ifadeler kullanılacak.
- **Instagram kullanıcı adı:** Müşteriden alınacak (`@fizikend` veya benzeri)
- **Gerçek fotoğraf:** Hakkımızda bölümü için müşteriden profesyonel fotoğraf istenecek
- **Galeri fotoğrafları:** Klinik görselleri müşteriden temin edilecek

---

## ✅ Tamamlanan Görevler

_(Görevler tamamlandıkça buraya taşınacak)_
