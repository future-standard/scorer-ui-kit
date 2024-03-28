import { useCallback,  useEffect,  useState } from 'react';

const matchDark = '(prefers-color-scheme: dark)';

//Current state of Dark changes to the opposite
const toggleThemeClass = (isDarkEnabled: boolean) => {

  if (isDarkEnabled) {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  } else {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  }
};

const setInitial = () => {

  const localStorageTheme =  localStorage.getItem('isDarkThemeEnabled');
  let startDark = true;

  if(localStorageTheme === null){
    startDark =  window.matchMedia(matchDark) && window.matchMedia(matchDark).matches;
  } else {
    startDark = localStorageTheme !== 'false';
  }

  toggleThemeClass(!startDark);

  return startDark;
};

const useThemeToggle = () => {

  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(setInitial);

  // toggle with Button
  const onThemeToggle = useCallback(() => {
    setIsDarkThemeEnabled((enabled) => {
      localStorage.isDarkThemeEnabled = !enabled;
      toggleThemeClass(enabled);

      return !enabled;
    });
  }, []);

  // Toggle when changing with OS and no local Storage variable has been set yet
  const osThemeToggle = useCallback((event: MediaQueryListEvent ) => {

    const localStorageTheme =  localStorage.getItem('isDarkThemeEnabled');
    if(localStorageTheme !== null) { return; }

    const isDark = event.matches;

    setIsDarkThemeEnabled(() => {
      toggleThemeClass(!isDark);
      return isDark;
    });

  },[]);

  useEffect(() => {
    const matcher = window.matchMedia(matchDark);
    matcher.addEventListener('change', osThemeToggle);

    return () => {
      matcher.removeEventListener('change', osThemeToggle);
    };

  }, [onThemeToggle, osThemeToggle]);

  return {
    isDarkThemeEnabled,
    setIsDarkThemeEnabled,
    onThemeToggle,
    isLightMode: !isDarkThemeEnabled
  };

};

export default useThemeToggle;
