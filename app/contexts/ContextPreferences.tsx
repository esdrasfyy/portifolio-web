"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import { ContextPreferencesT } from "./types/ContextProviderT";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedTheme = window.localStorage.getItem("color-theme");
    if (typeof storedTheme === "string") {
      return storedTheme;
    }
    const userMedia = window.matchMedia("(prefers-color-scheme:dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }
  return "light";
};

const getInitialLang = () => {
  if (typeof navigator !== "undefined") {
    if (typeof window !== "undefined") {
      const storedLang = localStorage.getItem("i18nextLng");
      return storedLang || navigator.language;
    }
    return navigator.language;
  }
  return "pt-BR";
};

const ContextPreferences = createContext<ContextPreferencesT | undefined>(
  undefined
);

const ProviderPreferences: React.FC<{
  children: ReactNode;
  initialTheme?: any;
}> = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState<string>(getInitialTheme);
  const [lang, setLang] = useState<string>(getInitialLang());
  const [menu, setMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  const onClose = () => {
    setMenu(false);
  };

  const onOpen = () => {
    setMenu(true);
  };

  const rawSetTheme = (rawTheme: any) => {
    const root =
      typeof window !== "undefined" ? window.document.documentElement : null;
    if (!root) return;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);
    localStorage.setItem("color-theme", rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      return setTheme("light");
    }
    return setTheme("dark");
  };

  const toggleLang = (value: string) => {
    localStorage.setItem("i18nextLng", value);
    setLang(value);
    return (window.location = window.location);
  };

  const contextValue: ContextPreferencesT = {
    setTheme,
    theme,
    toggleTheme,
    lang,
    toggleLang,
    onClose,
    onOpen,
    menu,
    loading,
    setLoading,
  };

  return (
    <ContextPreferences.Provider value={contextValue}>
      {children}
    </ContextPreferences.Provider>
  );
};

export { ContextPreferences, ProviderPreferences };
