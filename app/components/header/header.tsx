"use client";
import { ContextPreferences } from "@/app/contexts/ContextPreferences";
import Link from "next/link";
import { useContext } from "react";
import { i18n } from "../../translate/i18n";
import { Menu } from "../menu/menu";
import { useRouter } from "next/navigation";

const Header = () => {
  const contextPreferences = useContext(ContextPreferences!)!;
  const { theme, setLoading, toggleTheme, toggleLang, lang } =
    contextPreferences;
  const router = useRouter();

  function handleButtonClick(route: string) {
    setLoading(true);
    setTimeout(() => {
      router.push(route);
    }, 1000);
    
  }
  return (
    <header className="fixed top-0 left-0 flex w-full justify-between items-center px-11 bg-secondary text-primary gap-14 max-sm:px-8 z-[60] shadow-snipped">
      <Link href="/" className="flex items-center">
        {theme !== "light" ? (
          <span className="logo-white"></span>
        ) : (
          <span className="logo-black"></span>
        )}
      </Link>
      <nav className="flex w-1/2 max-lg:w-full justify-between max-sm:hidden">
        <button
          onClick={() => handleButtonClick("/")}
          className="font-semibold duration-300 ease-linear animated"
        >
          <span className="animation-transform">{i18n.t("header.home")}</span>
        </button>
        <button
          onClick={() => handleButtonClick("/about")}
          className="font-semibold duration-300 ease-linear animated"
        >
          <span className="animation-transform">{i18n.t("header.about")}</span>
        </button>
        <button
          onClick={() => handleButtonClick("/creations")}
          className="font-semibold duration-300 ease-linear animated"
        >
          <span className="animation-transform">
            {i18n.t("header.creations")}
          </span>
        </button>
        <button
          onClick={() => handleButtonClick("/contact")}
          className="font-semibold duration-300 ease-linear animated"
        >
          <span className="animation-transform">
            {i18n.t("header.contact")}
          </span>
        </button>
        <div className="flex gap-8">
          <button
            className="text-xs font-semibold text-[#505050] cursor-none max-md:cursor-pointer uppercase w-14"
            onClick={toggleTheme}
          >
            {theme === "dark" ? i18n.t("header.light") : i18n.t("header.dark")}
          </button>
          <button
            className="text-xs font-semibold text-[#505050] cursor-none max-md:cursor-pointer uppercase"
            onClick={() => toggleLang(lang === "pt-BR" ? "en-US" : "pt-BR")}
          >
            {lang === "pt-BR" ? "en-US" : "pt-BR"}
          </button>
        </div>
      </nav>
      <Menu />
    </header>
  );
};

export { Header };
