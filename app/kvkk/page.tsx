"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { contactInfo } from "@/data/mockData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import { useLanguage } from "@/contexts/LanguageContext";

export default function KVKKPage() {
  const { t } = useLanguage();
  const kvkk = t.kvkk;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Navbar />
      <FloatingControls />

      {/* Header */}
      <div className="bg-secondary-blue text-white py-16 pt-28">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 mb-6 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            {kvkk.backToHome}
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold">
            {kvkk.title}
          </h1>
          <p className="text-gray-300 mt-3 text-lg">
            {kvkk.subtitle}
          </p>
          <p className="text-gray-400 text-sm mt-2">{kvkk.lastUpdate}</p>
        </div>
      </div>

      {/* İçerik */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-10">

          {/* 1. Veri Sorumlusu */}
          <section>
            <h2 className="text-2xl font-display font-bold text-secondary-blue dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-white/10">
              1. Veri Sorumlusu
            </h2>
            <p className="text-secondary-blue-muted dark:text-gray-300 leading-relaxed">
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz;
              veri sorumlusu sıfatıyla <strong className="text-secondary-blue dark:text-white">Fzt. Kadir Temel / Fizyoterapi Merkezi</strong>
              tarafından aşağıda açıklanan kapsamda işlenebilecektir.
            </p>
            <div className="mt-4 p-5 rounded-xl bg-gray-50 dark:bg-secondary-blue/30 border border-gray-100 dark:border-white/10">
              <p className="text-sm text-secondary-blue-muted dark:text-gray-300">
                <strong className="text-secondary-blue dark:text-white">Veri Sorumlusu:</strong> Fzt. Kadir Temel / Fizyoterapi Merkezi<br />
                <strong className="text-secondary-blue dark:text-white">Adres:</strong> {contactInfo.address}, {contactInfo.city}<br />
                <strong className="text-secondary-blue dark:text-white">E-posta:</strong> {contactInfo.email}<br />
                <strong className="text-secondary-blue dark:text-white">Telefon:</strong> {contactInfo.phone}
              </p>
            </div>
          </section>

          {/* 2. Kişisel Verilerin İşlenme Amacı */}
          <section>
            <h2 className="text-2xl font-display font-bold text-secondary-blue dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-white/10">
              2. Kişisel Verilerin İşlenme Amacı
            </h2>
            <p className="text-secondary-blue-muted dark:text-gray-300 leading-relaxed mb-4">
              Toplanan kişisel verileriniz aşağıdaki amaçlar doğrultusunda işlenmektedir:
            </p>
            <ul className="space-y-2">
              {[
                "Fizyoterapi ve rehabilitasyon hizmetlerinin sunulması",
                "Randevu oluşturma, takip ve hatırlatma işlemleri",
                "Hastaya özel değerlendirme ve tedavi planının hazırlanması",
                "Hasta güvenliği ve sağlığının korunması",
                "Yasal yükümlülüklerin yerine getirilmesi",
                "İletişim faaliyetlerinin yürütülmesi",
                "İstatistiksel analizler ve hizmet kalitesinin iyileştirilmesi",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-secondary-blue-muted dark:text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-primary-orange flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 3. İşlenen Kişisel Veriler */}
          <section>
            <h2 className="text-2xl font-display font-bold text-secondary-blue dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-white/10">
              3. İşlenen Kişisel Veriler
            </h2>
            <p className="text-secondary-blue-muted dark:text-gray-300 leading-relaxed mb-4">
              Hizmetlerimiz kapsamında aşağıdaki kişisel veriler işlenebilmektedir:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Kimlik Bilgileri", items: ["Ad, soyad", "Doğum tarihi", "T.C. kimlik numarası"] },
                { title: "İletişim Bilgileri", items: ["Telefon numarası", "E-posta adresi", "Adres"] },
                { title: "Sağlık Bilgileri", items: ["Tıbbi anamnez", "Fizik muayene bulguları", "Tedavi planı ve notları"] },
                { title: "Diğer Bilgiler", items: ["Randevu geçmişi", "Ödeme bilgileri", "İletişim kayıtları"] },
              ].map((category, index) => (
                <div key={index} className="p-4 rounded-xl bg-gray-50 dark:bg-secondary-blue/30 border border-gray-100 dark:border-white/10">
                  <h4 className="font-semibold text-secondary-blue dark:text-white mb-2 text-sm">{category.title}</h4>
                  <ul className="space-y-1">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-xs text-secondary-blue-muted dark:text-gray-400 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary-orange flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-secondary-blue-muted dark:text-gray-400 italic">
              * Sağlık verileri KVKK kapsamında özel nitelikli kişisel veri sayılmakta olup yalnızca açık rızanız veya
              kanunlarda öngörülen istisnalar çerçevesinde işlenmektedir.
            </p>
          </section>

          {/* 4. Hukuki Sebep */}
          <section>
            <h2 className="text-2xl font-display font-bold text-secondary-blue dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-white/10">
              4. Kişisel Verilerin İşlenmesinin Hukuki Sebepleri
            </h2>
            <p className="text-secondary-blue-muted dark:text-gray-300 leading-relaxed mb-4">
              Kişisel verileriniz KVKK'nın 5. ve 6. maddeleri kapsamında aşağıdaki hukuki sebeplere dayanılarak işlenmektedir:
            </p>
            <ul className="space-y-2">
              {[
                "Açık rızanızın bulunması (özellikle sağlık verileri için)",
                "Sözleşmenin kurulması veya ifası için zorunlu olması",
                "Hukuki yükümlülüklerin yerine getirilmesi",
                "Meşru menfaatlerimizin korunması (temel hak ve özgürlüklerinize zarar vermemek kaydıyla)",
                "Sağlık hizmetleri mevzuatı çerçevesinde zorunluluk",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-secondary-blue-muted dark:text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-primary-orange flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 5. Aktarım */}
          <section>
            <h2 className="text-2xl font-display font-bold text-secondary-blue dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-white/10">
              5. Kişisel Verilerin Aktarılması
            </h2>
            <p className="text-secondary-blue-muted dark:text-gray-300 leading-relaxed">
              Kişisel verileriniz; yasal zorunluluk halinde yetkili kamu kurum ve kuruluşlarına (Sağlık Bakanlığı, mahkemeler vb.),
              hizmet alınan tedarikçilere (yazılım, muhasebe) ve açık rızanız bulunması halinde diğer sağlık kuruluşlarına
              KVKK'nın 8. ve 9. maddeleri çerçevesinde aktarılabilecektir.
            </p>
          </section>

          {/* 6. Saklama Süresi */}
          <section>
            <h2 className="text-2xl font-display font-bold text-secondary-blue dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-white/10">
              6. Kişisel Verilerin Saklanma Süresi
            </h2>
            <p className="text-secondary-blue-muted dark:text-gray-300 leading-relaxed">
              Kişisel verileriniz, ilgili mevzuat kapsamında belirlenen süreler boyunca saklanacaktır. Sağlık hizmetlerine
              ilişkin veriler, Sağlık Bakanlığı mevzuatı gereği en az 20 yıl süreyle muhafaza edilmektedir.
              Yasal saklama sürelerinin sona ermesi halinde veriler imha edilmektedir.
            </p>
          </section>

          {/* 7. Haklar */}
          <section>
            <h2 className="text-2xl font-display font-bold text-secondary-blue dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-white/10">
              7. Kişisel Veri Sahibinin Hakları
            </h2>
            <p className="text-secondary-blue-muted dark:text-gray-300 leading-relaxed mb-4">
              KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
                "İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme",
                "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri öğrenme",
                "Eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme",
                "Kişisel verilerin silinmesini veya yok edilmesini isteme",
                "Yapılan işlemlerin üçüncü kişilere bildirilmesini isteme",
                "Verilerin otomatik sistemler aracılığıyla analiz edilmesi nedeniyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme",
                "Kanuna aykırı işleme nedeniyle zararın giderilmesini talep etme",
              ].map((right, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-secondary-blue/30 border border-gray-100 dark:border-white/5">
                  <span className="w-5 h-5 rounded-full bg-primary-orange/20 text-primary-orange text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-sm text-secondary-blue-muted dark:text-gray-300">{right}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Başvuru */}
          <section>
            <h2 className="text-2xl font-display font-bold text-secondary-blue dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-white/10">
              8. Başvuru Yöntemi
            </h2>
            <p className="text-secondary-blue-muted dark:text-gray-300 leading-relaxed mb-4">
              Yukarıda belirtilen haklarınızı kullanmak için kimliğinizi ispat edici belgelerle birlikte aşağıdaki kanalları
              kullanarak tarafımıza başvurabilirsiniz:
            </p>
            <div className="p-6 rounded-xl bg-primary-orange/5 border border-primary-orange/20 dark:bg-primary-orange/10">
              <p className="text-secondary-blue-muted dark:text-gray-300 text-sm space-y-2">
                <span className="block"><strong className="text-secondary-blue dark:text-white">E-posta:</strong> {contactInfo.email}</span>
                <span className="block"><strong className="text-secondary-blue dark:text-white">Adres:</strong> {contactInfo.address}, {contactInfo.city}</span>
                <span className="block"><strong className="text-secondary-blue dark:text-white">Telefon:</strong> {contactInfo.phone}</span>
              </p>
              <p className="mt-4 text-xs text-secondary-blue-muted dark:text-gray-400">
                Başvurunuz en geç 30 gün içinde ücretsiz olarak sonuçlandırılacaktır. İşlemin ayrıca bir maliyet gerektirmesi
                halinde Kişisel Verileri Koruma Kurulu tarafından belirlenen tarife uygulanacaktır.
              </p>
            </div>
          </section>

        </div>

        {/* Geri dön butonu */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-secondary-blue hover:bg-secondary-blue/90 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            {kvkk.backButton}
          </Link>
        </div>
      </div>
    </div>
  );
}
