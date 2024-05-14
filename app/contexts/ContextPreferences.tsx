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

const ContextPreferences = createContext<ContextPreferencesT | undefined>(
  undefined
);

const ProviderPreferences: React.FC<{
  children: ReactNode;
  initialTheme: any;
}> = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState<string>(getInitialTheme);
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
  const NotificationsRead = () => {};
  const NotificationsDelete = () => {};

  const contextValue: ContextPreferencesT = {
    setTheme,
    theme,
  };

  return (
    <ContextPreferences.Provider value={contextValue}>
      {children}
    </ContextPreferences.Provider>
  );
};

export { ContextPreferences, ProviderPreferences };
