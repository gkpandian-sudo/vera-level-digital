import type { Metadata } from "next"
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono, Noto_Sans_Devanagari } from "next/font/google"
import Script from "next/script"
import { ThemeProvider, themeScript } from "@/lib/theme"
import { LangProvider } from "@/lib/i18n"
import "./globals.css"

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
})

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title:       "Vera Level Digital — Web Solutions for India Businesses",
  description: "Custom Next.js websites for Tamil, Hindi & English-speaking businesses. Starting ₹10,000.",
  keywords:    ["web development", "Next.js", "Tamil Nadu", "Chennai", "India", "business website", "Vera Level Digital"],
  openGraph: {
    title:       "Vera Level Digital",
    description: "Vera Level Web Solutions for India Businesses — Tamil | हिंदी | English",
    type:        "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ta" className="dark" suppressHydrationWarning>
      <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} ${notoDevanagari.variable} font-sans`}>
        <ThemeProvider>
          <LangProvider>
            {children}
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
