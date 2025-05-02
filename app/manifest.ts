import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bet88 Sports Betting App",
    short_name: "Bet88",
    description: "A progressive web app for sports betting and casino games",
    id: "/",
    start_url: "/",
    display: "standalone",
    background_color: "#121212",
    theme_color: "#000000",
    orientation: "portrait",
    prefer_related_applications: false,
    categories: ["sports", "games", "entertainment"],
    icons: [
      {
        src: "https://d2ygwlcxd4dd5s.cloudfront.net/BET_88_LOGO_with_encircled_colored_pagcor_63e9807d1d.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://d2ygwlcxd4dd5s.cloudfront.net/BET_88_LOGO_with_encircled_colored_pagcor_63e9807d1d.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "https://d2ygwlcxd4dd5s.cloudfront.net/BET_88_LOGO_with_encircled_colored_pagcor_63e9807d1d.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "https://d2ygwlcxd4dd5s.cloudfront.net/BET_88_LOGO_with_encircled_colored_pagcor_63e9807d1d.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "https://d2ygwlcxd4dd5s.cloudfront.net/BET_88_LOGO_with_encircled_colored_pagcor_63e9807d1d.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple-touch-icon",
      },
    ],
    screenshots: [
      {
        src: "https://d2ygwlcxd4dd5s.cloudfront.net/Bet88_How_To_Download_2500x799_enp_0461d80d2d.jpg",
        sizes: "2500x799",
        type: "image/jpeg",
        form_factor: "wide",
      },
      {
        src: "https://d2ygwlcxd4dd5s.cloudfront.net/static_en_6ff5e4ce09.jpg",
        sizes: "1200x800",
        type: "image/jpeg",
        form_factor: "narrow",
      },
    ],
  }
}

