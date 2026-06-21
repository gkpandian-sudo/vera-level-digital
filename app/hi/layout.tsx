// -- Dhamaka Digital — Hindi Page Layout --
// Wraps /hi in HindiLangProvider: starts at Hindi, allows HI ↔ EN.
// The root LangProvider from the root layout is overridden here.

import type { Metadata } from "next"
import { HindiLangProvider } from "@/lib/i18n"

export const metadata: Metadata = {
  title:       "Dhamaka Digital — धमाका डिजिटल | भारत के बिज़नेस के लिए वेबसाइट",
  description: "₹10,000 से शुरू। कस्टम Next.js वेबसाइट — 7-14 दिन में तैयार। मुफ़्त सलाह लें।",
  keywords:    ["वेबसाइट डिज़ाइन", "Next.js", "भारत", "बिज़नेस वेबसाइट", "Dhamaka Digital", "धमाका डिजिटल"],
  openGraph: {
    title:       "Dhamaka Digital — धमाका डिजिटल",
    description: "भारत के बिज़नेस के लिए धमाकेदार वेब solutions। ₹10,000 से शुरू।",
    type:        "website",
  },
}

export default function HindiLayout({ children }: { children: React.ReactNode }) {
  return (
    <HindiLangProvider>
      {children}
    </HindiLangProvider>
  )
}
