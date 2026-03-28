/** Hizmet detayından ana sayfaya dönünce hash kaydırması için (Next router hash taşımaz) */
export const HOME_SCROLL_HASH_KEY = "fizikendHomeSectionHash";

/** Ana sayfa bölümleri — adres çubuğunda /#... olarak görünür */
export const HOME_SECTION_HASHES = [
  "#hero",
  "#services",
  "#terapi-sureci",
  "#about",
  "#certifications",
  "#galeri",
  "#contact",
] as const;

export function homeHref(hash: (typeof HOME_SECTION_HASHES)[number]) {
  return `/${hash}` as const;
}
