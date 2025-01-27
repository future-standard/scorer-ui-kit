import { useCallback, useEffect, useRef } from "react";

const setInitialLanguage = (defaultLanguages: string[], initLanguage?: string) => {
  if (defaultLanguages.length === 0) {
    console.warn("defaultLanguages array is empty. Unable to set a language.");
    return;
  }

  if (initLanguage && defaultLanguages.includes(initLanguage)) {
    document.documentElement.setAttribute("lang", initLanguage);
    return;
  }

  const browserLang = navigator.language.split("-")[0];
  const htmlLang = document.documentElement.lang;

  let langToSet = defaultLanguages[0]; // Default to the first language in the list

  if (!htmlLang && defaultLanguages.includes(browserLang)) {
    langToSet = browserLang;

  } else if (defaultLanguages.includes(htmlLang)) {
    langToSet = htmlLang;
  }

  if (document.documentElement.lang !== langToSet) {
    document.documentElement.setAttribute("lang", langToSet);
  }
};

const useLanguageAttribute = (languageList: string[], initLanguage?: string) => {

  const isInitialMount = useRef(true);

  const onLanguageAttributeToggle = useCallback(() => {
    if (languageList.length < 2) {
      console.warn("Insufficient languages in the list for toggling.");
      return;
    }

    const currentLang = document.documentElement.lang;
    const newLang = currentLang === languageList[0] ? languageList[1] : languageList[0];
    document.documentElement.setAttribute("lang", newLang);
  }, [languageList]);

  // Initialize the lang attribute on mount
  useEffect(() => {
    if (languageList.length === 0) {
      console.warn("languageList is empty. Unable to initialize language attribute.");
      return;
    }

    if (isInitialMount.current) {
      setInitialLanguage(languageList, initLanguage);
      isInitialMount.current = false;
    }

  }, [initLanguage, languageList]);

  return {
    onLanguageAttributeToggle,
  };
};

export default useLanguageAttribute;
