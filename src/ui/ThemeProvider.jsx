import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {}
})

export function ThemeProvider({ children, initial = undefined }){
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || initial || 'light'
    } catch {
      return initial || 'light'
    }
  })

  useEffect(() => {
    try { localStorage.setItem('theme', theme) } catch {}
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(){
  return useContext(ThemeContext)
}

export default ThemeProvider
