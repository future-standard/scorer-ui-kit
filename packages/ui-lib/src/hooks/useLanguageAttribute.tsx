import { useCallback, useEffect } from "react";

const setInitialLanguage = (defaultLanguages: string[]) => {
  if (defaultLanguages.length === 0) {
    console.warn("defaultLanguages array is empty. Unable to set a language.");
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

const useLanguageAttribute = (languageList: string[]) => {
  // Toggles between the first two languages in the list
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
    setInitialLanguage(languageList);
  }, [languageList]);

  return {
    onLanguageAttributeToggle,
  };
};

export default useLanguageAttribute;
