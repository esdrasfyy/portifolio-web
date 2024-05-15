"use client";
import { ContextPreferences } from "@/app/contexts/ContextPreferences";
import Link from "next/link";
import { useContext } from "react";
import { Sling as Hamburger } from "hamburger-react";

const Header = () => {
  const contextPreferences = useContext(ContextPreferences!)!;
  const { theme, onOpen, menu, toggleTheme } = contextPreferences;
  return (
    <header className="fixed top-0 left-0 flex w-full justify-between items-center px-8 bg-secondary text-secondary gap-14 max-sm:px-4">
      <Link href="/" className="flex items-center">
        {theme === "light" ? (
          <span className="logo-white"></span>
        ) : (
          <span className="logo-black"></span>
        )}
      </Link>
      <nav className="flex w-1/2 max-lg:w-full justify-between max-sm:hidden">
        <Link
          href="/"
          className="font-semibold duration-300 ease-linear animated"
        >
          <span className="animation-transform">HOME</span>
        </Link>
        <Link
          href="/about"
          className="font-semibold duration-300 ease-linear animated"
        >
          <span className="animation-transform">ABOUT</span>
        </Link>
        <Link
          href="#"
          className="font-semibold duration-300 ease-linear animated"
        >
          <span className="animation-transform">PROJECTS</span>
        </Link>
        <Link
          href="#"
          className="font-semibold duration-300 ease-linear animated"
        >
          <span className="animation-transform">CONTACT</span>
        </Link>
        <div className="flex gap-8">
          <button
            className="text-xs font-semibold text-[#505050] cursor-none max-md:cursor-pointer uppercase w-14"
            onClick={toggleTheme}
          >
            {theme === "dark" ? "light" : "dark"}
          </button>
          <button className="text-xs font-semibold text-[#505050] cursor-none max-md:cursor-pointer">
            PT-BR
          </button>
        </div>
      </nav>
      <menu className="hidden max-sm:flex items-center" onClick={onOpen}>
        <Hamburger size={25} toggled={menu} />
      </menu>
    </header>
  );
};

export { Header };
