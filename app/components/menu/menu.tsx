"use client";
import { ContextPreferences } from "@/app/contexts/ContextPreferences";
import { i18n } from "@/app/translate/i18n";
import { Drawer } from "antd";
import React, { useContext } from "react";

function Menu() {
  const context = useContext(ContextPreferences!)!;
  const { menu, onClose, lang, toggleLang, theme, toggleTheme } = context;

  return (
    <Drawer title="Basic Drawer" onClose={() => onClose()} open={menu}>
      <button
        className="text-xs font-semibold text-[#505050] cursor-none max-md:cursor-pointer uppercase w-14"
        onClick={toggleTheme}
      >
        {theme === "dark" ?  i18n.t("header.light")  :  i18n.t("header.dark") }
      </button>
      <button
            className="text-xs font-semibold text-[#505050] cursor-none max-md:cursor-pointer uppercase"
            onClick={() => toggleLang(lang === "pt-BR" ? "en-US" : "pt-BR")}
          >
            {lang === "pt-BR" ? "en-US" : "pt-BR"}
          </button>
    </Drawer>
  );
}

export { Menu };
