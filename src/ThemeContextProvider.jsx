// Todo: Create & manage context in this file
import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  pageTheme: '',
  updateTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  // Todo: Add the component code (incl. dynamic context value)
  const [theme, setTheme] = useState(false);

  function handleUpdateTheme() {
    setTheme(!theme);
  }

  const ctxValue = {
    pageTheme: theme ? 'light' : 'dark',
    updateTheme: handleUpdateTheme,
  };

  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}
