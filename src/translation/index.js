//@ts-check
import React, { createContext, useContext } from 'react'

import en from './translation-en.json'
import ar from './translation-ar.json'
import fa from './translation-fa.json'

const translate = lang => key => {
  // lang === 'en' ? en[key] : ar[key]
  switch (lang) {
    case 'en':
      return en[key];
    case 'ar':
      return ar[key];
    case 'fa':
      return fa[key];
    default:
      return fa[key];
  }
}

const TranslationContext = createContext(undefined)

export const TranslationProvider = ({ children, lang = 'en' }) => {
  return (
    <TranslationContext.Provider value={translate(lang)}>
      {children}
    </TranslationContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if(context === undefined) {
    throw Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}
