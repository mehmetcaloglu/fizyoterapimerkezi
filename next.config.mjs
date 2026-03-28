/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Statik export için gerekli
    domains: ['images.unsplash.com', 'i.pravatar.cc'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
