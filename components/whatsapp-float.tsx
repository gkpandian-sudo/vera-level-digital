"use client"

import { motion } from "framer-motion"
import { EASE } from "@/lib/motion"

const WA_LINK =
  "https://wa.me/919632233776?text=Hello%2C%20I%27d%20like%20a%20free%20consultation%20for%20my%20website."

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, ease: EASE }}
      whileHover={{ scale: 1.06, y: -3, transition: { duration: 0.2, ease: EASE } }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl font-bold text-sm"
    >
      {/* WhatsApp icon */}
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" aria-hidden>
        <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.547 4.14 1.587 5.946L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896.002-3.176-1.24-6.165-3.48-8.45zM12.045 21.785h-.004c-1.774 0-3.513-.474-5.03-1.37l-.361-.213-3.741.977.998-3.645-.235-.374a9.86 9.86 0 01-1.516-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.881 9.884zm5.422-7.403c-.297-.148-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.148-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.148-1.255-.461-2.39-1.462-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.297-.347.446-.521.15-.173.198-.296.297-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </motion.a>
  )
}
