import React, { createContext, useState } from 'react'

export const LanguageContext = createContext()

export default function LanguageProvider({children}) {
    const languages = [["БҰЛ MAIN КОМПАНЕНТ","ҚАЗАКША"],["ЭТО MAIN КОМПАНЕНТ","РУСКИЙ"],["THIS IS MAIN COMPANENT","ENGLISH"],]

    const [langIndex,setLangIndex] = useState()

    const changeLanguage = (index) => setLangIndex(index)
  return (
    <div>
      <LanguageContext.Provider value={{ languages, changeLanguage, translations: languages[langIndex] }}>
        {children}
      </LanguageContext.Provider>
    </div>
  )
}
