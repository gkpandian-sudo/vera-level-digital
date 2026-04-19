// -- Vera Level Digital — Root Layout --
// Loads fonts, injects no-flash theme script, wraps in ThemeProvider.

import type { Metadata } from "next"
import { Inter, Space_Grotesk, Cormorant_Garamond } from "next/font/google"
import Script from "next/script"
import { ThemeProvider, themeScript } from "@/lib/theme"
import "./globals.css"

// ── Google Fonts ─────────────────────────────────────────────────────
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
})

// ── Page metadata ─────────────────────────────────────────────────────
export const metadata: Metadata = {
  title:       "Vera Level Digital — Web Solutions for Namma Chennai Businesses",
  description: "Tamil businesses கோஸ்கான அதிவேக, custom Next.js இணையதளங்கள். ₹10,000 முதல் தொடங்குகிறது.",
  keywords:    ["web development", "Next.js", "Tamil Nadu", "Chennai", "business website", "Vera Level Digital"],
  openGraph: {
    title:       "Vera Level Digital",
    description: "Vera Level Web Solutions for Namma Chennai Businesses",
    type:        "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // -- Dark class applied here; ThemeProvider + inline script keep it in sync --
    <html lang="ta" className="dark" suppressHydrationWarning>
      <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${cormorant.variable} font-sans bg-surface text-on-surface`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
