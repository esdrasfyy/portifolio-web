"use client";
import { ContextPreferences } from "@/app/contexts/ContextPreferences";
import { Drawer } from "antd";
import React, { useContext } from "react";

function Menu() {
  const context = useContext(ContextPreferences!)!;
  const { menu, onClose, onOpen, setTheme, theme, toggleTheme } = context;

  return (
    <Drawer title="Basic Drawer" onClose={() => onClose()} open={menu}>
      <button
        className="text-xs font-semibold text-[#505050] cursor-none max-md:cursor-pointer uppercase w-14"
        onClick={toggleTheme}
      >
        {theme === "dark" ? "light" : "dark"}
      </button>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}

export { Menu };
