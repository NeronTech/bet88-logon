import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bet88 Sports Betting App",
  description: "A progressive web app for sports betting and casino games",
  manifest: "/manifest.json",
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  appleWebApp: {
    capable: true,
    title: "Bet88",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-touch-icon":
      "https://d2ygwlcxd4dd5s.cloudfront.net/BET_88_LOGO_with_encircled_colored_pagcor_63e9807d1d.png",
    "apple-touch-startup-image":
      "https://d2ygwlcxd4dd5s.cloudfront.net/Bet88_How_To_Download_2500x799_enp_0461d80d2d.jpg",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* iOS specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Bet88" />

        {/* iOS icons */}
        <link
          rel="apple-touch-icon"
          href="https://d2ygwlcxd4dd5s.cloudfront.net/BET_88_LOGO_with_encircled_colored_pagcor_63e9807d1d.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="https://d2ygwlcxd4dd5s.cloudfront.net/BET_88_LOGO_with_encircled_colored_pagcor_63e9807d1d.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://d2ygwlcxd4dd5s.cloudfront.net/BET_88_LOGO_with_encircled_colored_pagcor_63e9807d1d.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="https://d2ygwlcxd4dd5s.cloudfront.net/BET_88_LOGO_with_encircled_colored_pagcor_63e9807d1d.png"
        />

        {/* iOS splash screens */}
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          href="https://d2ygwlcxd4dd5s.cloudfront.net/Bet88_How_To_Download_2500x799_enp_0461d80d2d.jpg"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          href="https://d2ygwlcxd4dd5s.cloudfront.net/Bet88_How_To_Download_2500x799_enp_0461d80d2d.jpg"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          href="https://d2ygwlcxd4dd5s.cloudfront.net/Bet88_How_To_Download_2500x799_enp_0461d80d2d.jpg"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          href="https://d2ygwlcxd4dd5s.cloudfront.net/Bet88_How_To_Download_2500x799_enp_0461d80d2d.jpg"
        />
        <link
          rel="apple-touch-startup-image"
          media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
          href="https://d2ygwlcxd4dd5s.cloudfront.net/Bet88_How_To_Download_2500x799_enp_0461d80d2d.jpg"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

