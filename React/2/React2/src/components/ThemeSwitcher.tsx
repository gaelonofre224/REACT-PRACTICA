//import { useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme'

type Theme = 'light' | 'dark'

//const THEME_STORAGE_KEY = 'classroom-theme'

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
)

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" />
  </svg>
)

export function ThemeSwitcher() {
  //const [theme, setTheme] = useState<Theme>('light')
  //const [hasLoadedTheme, setHasLoadedTheme] = useState(false)

  // useEffect(() => {
  //   const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  //   if (storedTheme === 'light' || storedTheme === 'dark') {
  //     setTheme(storedTheme)
  //   }
  //   setHasLoadedTheme(true)
  // }, [])

  // useEffect(() => {
  //   if (!hasLoadedTheme) {
  //     return
  //   }

  //   document.documentElement.dataset.theme = theme
  //   window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  // }, [theme, hasLoadedTheme])

  // const toggleTheme = (): void => {
  //   setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  // }
  const {hasLoadedTheme, theme, toggleTheme} = useTheme()
  const isDark = theme === 'dark'
  const nextThemeLabel = isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'

  return (
    <nav className="navbar" aria-label="Principal">
      <div className="container navbar__inner">
        <strong>Demo React</strong>
        <button
          type="button"
          className="btn btn--ghost btn--icon"
          onClick={toggleTheme}
          disabled={!hasLoadedTheme}
          aria-label={nextThemeLabel}
          title={nextThemeLabel}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  )
}
