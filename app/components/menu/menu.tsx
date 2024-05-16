import { useContext } from "react";
import { ContextPreferences } from "@/app/contexts/ContextPreferences";
import { i18n } from "@/app/translate/i18n";
import { Button, Popover } from "antd";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";

function Menu() {
  const context = useContext(ContextPreferences!)!;
  const { menu, onClose, lang, toggleLang, theme, toggleTheme, onOpen } =
    context;

    
  return (
    <>
      <Popover
        content={
          <div className="flex flex-col text-start justify-start items-start gap-5">
            <nav className="flex flex-col gap-5">
              <Link
                href="/"
                className="font-semibold duration-300 ease-linear animated"
              >
                <span className="animation-transform">
                  {i18n.t("header.home")}
                </span>
              </Link>
              <Link
                href="/about"
                className="font-semibold duration-300 ease-linear animated"
              >
                <span className="animation-transform">
                  {i18n.t("header.about")}
                </span>
              </Link>
              <Link
                href="#"
                className="font-semibold duration-300 ease-linear animated"
              >
                <span className="animation-transform">
                  {i18n.t("header.creations")}
                </span>
              </Link>
              <Link
                href="#"
                className="font-semibold duration-300 ease-linear animated"
              >
                <span className="animation-transform">
                  {i18n.t("header.contact")}
                </span>
              </Link>
            </nav>
            <div className="flex flex-col gap-5 items-start">
              <button
                className="text-xs font-semibold text-[#505050] cursor-none max-md:cursor-pointer uppercase"
                onClick={toggleTheme}
              >
                {theme === "dark"
                  ? i18n.t("header.light")
                  : i18n.t("header.dark")}
              </button>
              <button
                className="text-xs font-semibold text-[#505050] cursor-none max-md:cursor-pointer uppercase"
                onClick={() => toggleLang(lang === "pt-BR" ? "en-US" : "pt-BR")}
              >
                {lang === "pt-BR" ? "en-US" : "pt-BR"}
              </button>
            </div>
          </div>
        }
        trigger="click"
        open={menu}
        onOpenChange={onOpen}
      >
        <menu
          className="hidden max-sm:flex items-center"
          onClick={menu ? onClose : onOpen}
        >
          <Hamburger size={25} toggled={menu} />
        </menu>
      </Popover>
    </>
  );
}

export { Menu };
