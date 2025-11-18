import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'
import { strings } from './translations'

const TranslationContext = createContext({
  language: 'en',
  setLanguage: () => {},
  t: strings.en,
})

export function TranslationProvider({ children, initial = undefined }){
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem('lang') || initial || 'en' } catch { return initial || 'en' }
  })

  useEffect(() => {
    try { localStorage.setItem('lang', language) } catch {}
  }, [language])

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: strings[language] || strings.en,
  }), [language])

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation(){
  return useContext(TranslationContext)
}

export default TranslationProvider
