import { useContext } from "react";
import { ContextPreferences } from "@/app/contexts/ContextPreferences";
import { i18n } from "@/app/translate/i18n";
import { Button, Popover } from "antd";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Menu() {
  const context = useContext(ContextPreferences!)!;
  const {
    menu,
    onClose,
    lang,
    toggleLang,
    theme,
    toggleTheme,
    onOpen,
    setLoading,
  } = context;
  const router = useRouter();
  function handleButtonClick(route: string) {
    setLoading(true);
    setTimeout(() => {
      router.push(route);
    }, 500);
    onClose();
  }
  return (
    <>
      <Popover
        content={
          <div className="flex flex-col text-start text-primary justify-start mx-3 items-start gap-5">
            <nav className="flex flex-col w-full text-start gap-3 pt-3">
              <button
                onClick={() => handleButtonClick("/")}
                className="font-semibold animated text-start w-full hover:bg-primary px-2 py-1 rounded-sm pr-10 duration-300 ease-linear"
              >
                <span className="animation-transform">
                  {i18n.t("header.home")}
                </span>
              </button>
              <button
                onClick={() => handleButtonClick("/about")}
                className="font-semibold animated text-start w-full hover:bg-primary px-2 py-1 rounded-sm pr-10 duration-300 ease-linear"
              >
                <span className="animation-transform">
                  {i18n.t("header.about")}
                </span>
              </button>
              <button
                onClick={() => handleButtonClick("/creations")}
                className="font-semibold animated text-start w-full hover:bg-primary px-2 py-1 rounded-sm pr-10 duration-300 ease-linear"
              >
                <span className="animation-transform">
                  {i18n.t("header.creations")}
                </span>
              </button>
              <button
                onClick={() => handleButtonClick("/contact")}
                className="font-semibold animated text-start w-full hover:bg-primary px-2 py-1 rounded-sm pr-10 duration-300 ease-linear"
              >
                <span className="animation-transform">
                  {i18n.t("header.contact")}
                </span>
              </button>
            </nav>
            <div className="flex justify-between gap-5 items-start w-full pb-3">
              <button
                className="text-xs font-semibold text-[#505050] cursor-none hover:bg-primary px-3 py-1 duration-300 ease-linear rounded-sm hover:text-primary max-md:cursor-pointer uppercase"
                onClick={toggleTheme}
              >
                {theme === "dark"
                  ? i18n.t("header.light")
                  : i18n.t("header.dark")}
              </button>
              <button
                className="text-xs font-semibold text-[#505050] cursor-none max-md:cursor-pointer hover:bg-primary px-3 py-1 duration-300 ease-linear rounded-sm hover:text-primary uppercase"
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
