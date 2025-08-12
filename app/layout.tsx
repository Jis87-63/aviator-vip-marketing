import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "MegaGameLive - Aviator VIP | Bônus 200% + Sinais Grátis",
  description:
    "Jogue Aviator no MegaGameLive com bônus de 200% no primeiro depósito. Sinais VIP grátis, suporte 24/7 e os melhores jogos de cassino em Moçambique.",
  generator: "v0.dev",
  verification: {
    google: "w99-xgy1mUVo_nkA-Ybkw9pRS77cuhF8dK--K-TFNFE",
  },
  keywords: "aviator, cassino, moçambique, bônus, metical, jogos online, megagamelive",
  authors: [{ name: "Aviator VIP Moçambique" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/aviator-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/aviator-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/aviator-icon-192.png", sizes: "192x192", type: "image/png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "MegaGameLive - Aviator VIP | Bônus 200%",
    description: "Jogue Aviator com bônus de 200% no primeiro depósito. Sinais VIP grátis!",
    type: "website",
    locale: "pt_MZ",
    images: [
      {
        url: "/aviator-icon-512.png",
        width: 512,
        height: 512,
        alt: "Aviator VIP Moçambique",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-MZ">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
