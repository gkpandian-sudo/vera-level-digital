// -- Vera Level Digital — Theme context --
// Provides dark/light toggling with localStorage persistence and
// a no-flash inline script injected via layout.tsx.

"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"

type Theme = "dark" | "light"

interface ThemeCtx {
  theme:  Theme
  toggle: () => void
}

const ThemeContext = createContext<ThemeCtx>({
  theme:  "dark",
  toggle: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")

  // Sync with localStorage + apply class on mount
  useEffect(() => {
    const saved = localStorage.getItem("vld-theme") as Theme | null
    const initial = saved ?? "dark"
    setTheme(initial)
    document.documentElement.classList.toggle("dark", initial === "dark")
  }, [])

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark"
    setTheme(next)
    localStorage.setItem("vld-theme", next)
    document.documentElement.classList.toggle("dark", next === "dark")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

/** Inline script injected in <head> to prevent flash of wrong theme */
export const themeScript = `
(function(){
  var t = localStorage.getItem('vld-theme');
  document.documentElement.classList.toggle('dark', t !== 'light');
})();
`
