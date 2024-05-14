"use client";
import { ContextPreferences } from "@/app/contexts/ContextPreferences";
import Link from "next/link";
import { useContext } from "react";
import { Sling as Hamburger } from "hamburger-react";

const Header = () => {
  const contextPreferences = useContext(ContextPreferences!)!;
  const { setTheme, theme } = contextPreferences;
  return (
    <header className="fixed top-0 left-0 flex w-full justify-between items-center px-8 bg-secondary text-secondary gap-14">
      <Link href="/" className="flex items-center">
        {theme !== "dark" ? (
          <span className="py-3 text-2xl">E</span>
        ) : (
          <span className="logo"></span>
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
            className="text-xs font-semibold text-[#505050] cursor-none uppercase w-14"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "light" : "dark"}
          </button>
          <button className="text-xs font-semibold text-[#505050] cursor-none">
            PT-BR
          </button>
        </div>
      </nav>
      <menu className="hidden max-sm:flex items-center">
        <Hamburger size={25} />
      </menu>
    </header>
  );
};

export { Header };
