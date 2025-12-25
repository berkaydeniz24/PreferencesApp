import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_KEY = 'theme';

export function useTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem(THEME_KEY);
        if (stored) setTheme(stored);
      } catch (e) {}
    })();
  }, []);

  const toggleTheme = async () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    try {
      await AsyncStorage.setItem(THEME_KEY, next);
    } catch (e) {}
  };

  return { theme, toggleTheme };
}
