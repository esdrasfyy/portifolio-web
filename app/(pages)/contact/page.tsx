"use client";
import { ButtonDefault } from "@/app/components/ui/buttons/default/button-default";
import { ContextPreferences } from "@/app/contexts/ContextPreferences";
import { i18n } from "@/app/translate/i18n";
import React, { useContext } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { LiaLinkedinIn } from "react-icons/lia";
import { SiWhatsapp } from "react-icons/si";

function Contact() {
  const context = useContext(ContextPreferences!)!;
  const { theme } = context;
  return (
    <main className="min-h-screen w-full flex flex-col justify-start items-center px-12 pt-[10vh] max-sm:px-4">
      <h1 className="text-7xl font-thin max-sm:text-6xl flex gap-8">
        <span className="line">{i18n.t("contact.titles.one")}</span>
      </h1>
      <section className="flex w-full min-h-[80vh] justify-between items-center gap-14 max-lg:flex-col-reverse">
        <div className="w-full flex justify-between items-center max-lg:justify-center">
          <img
            src={`${theme === "dark" ? "/techwhite.svg" : "/techblack.svg"}`}
            alt=""
            className={`text-primary max-lg:w-[300px] `}
          />
        </div>
        <div className="flex w-full justify-end max-h-[220px] h-full max-lg:justify-center max-lg:mt-14 max-md:flex-col max-md:items-center max-md:max-h-full max-md:gap-5">
          <span
            className={`min-h-full mx-14 w-[1px] max-lg:hidden ${
              theme === "dark"
                ? "bg-[white] opacity-20"
                : "bg-[black] opacity-50"
            }`}
          ></span>
          <ul className="flex flex-col justify-between w-[309px] max-md:gap-5">
            <li className="w-full">
              <ButtonDefault
                href="#"
                content="LINKEDIN"
                Icon={LiaLinkedinIn}
                iconStyles={`text-[15px] py-[0.10rem] px-[0.135rem] flex items-center justify-center rounded-full ${
                  theme === "dark"
                    ? "bg-[white] text-[black]"
                    : "bg-[black] text-[white]"
                }`}
              />
            </li>
            <li className="w-full">
              <ButtonDefault
                href="#"
                content="GITHUB"
                Icon={FaGithub}
                iconStyles="text-xl"
              />
            </li>
            <li className="w-full">
              <ButtonDefault
                href="#"
                content="DISCORD"
                Icon={FaDiscord}
                iconStyles="text-lg"
              />
            </li>
            <li className="w-full">
              <ButtonDefault
                href="#"
                content="WHATSAPP"
                Icon={SiWhatsapp}
                iconStyles="text-lg"
              />
            </li>
          </ul>
          <div className="flex">
            <span
              className={`min-h-full mx-14 w-[1.5px] max-md:hidden ${
                theme === "dark"
                  ? "bg-[white] opacity-20"
                  : "bg-[black] opacity-50"
              }`}
            ></span>
            <div className="flex flex-col justify-between gap-5">
              <div className="flex flex-col max-h-[350px] gap-5">
                <span className="group relative grid overflow-hidden rounded-sm px-1 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                  <span>
                    <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-sm [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                  </span>
                  <span className="backdrop absolute inset-px rounded-sm bg-primary transition-colors duration-200 group-hover:bg-neutral-900" />
                  <textarea className="z-10 text-neutral-400 text-sm font-medium bg-primary text-primary min-h-[150px] max-h-[150px] p-2 w-[300px]"></textarea>
                </span>
              </div>
              <ButtonDefault
                href="#"
                content="SEND EMAIL"
                Icon={IoIosMail}
                iconStyles="text-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
