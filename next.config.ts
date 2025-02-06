import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Protocole du domaine (généralement 'https')
        hostname: "fr.pinterest.com", // Domaine autorisé
        pathname: "/**", // Optionnel : définissez des chemins spécifiques si nécessaire, '/**' permet tous les chemins
      },
      {
        protocol: "https", // Protocole du domaine (généralement 'https')
        hostname: "i.pinimg.com", // Domaine autorisé
        pathname: "/**", // Optionnel : définissez des chemins spécifiques si nécessaire, '/**' permet tous les chemins
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;
