import { i18n } from "@/app/translate/i18n";
import Link from "next/link";
import React from "react";
import { FiGithub } from "react-icons/fi";
import { GoArrowUp } from "react-icons/go";
import { LuMail } from "react-icons/lu";
import { RiLinkedinLine } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";

export function Footer() {
  return (
    <footer className="w-full flex justify-between max-sm:justify-center items-center max-sm:flex-col p-20 max-md:px-4 bg-secondary shadow-lg">
      <div className="text-3xl uppercase w-full">
        <h3 className="max-w-72 max-md:max-w-full max-sm:text-2xl">{i18n.t("creations.titles.have")}</h3>
      </div>
      <div className="grid grid-cols-4 grid-rows-1 w-1/2 min-w-96 max-md:w-full gap-5">
        <div className="h-[180px] max-w-20 max-sm:max-w-full max-sm:h-fit  max-sm:w-full max-sm:mt-12">
          <Link href="https://wa.link/ezjvuo" target="_blank" className="max-sm:hidden h-full rotate-0 relative grid overflow-hidden rounded-md px-6 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 max-md:cursor-pointer group">
            <span>
              <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-md [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[950%] before:rotate-[-65deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-px rounded-md bg-primary transition-colors duration-300 group-hover:bg-secondary ease-linear" />
            <span className="z-10 text-primary flex flex-col h-full justify-between items-center text-sm font-medium pb-5">
              <span className="text-2xl group-hover:translate-y-[-15px] duration-300 ease-linear">
                <GoArrowUp />
              </span>
              <span className="text-2xl">
                <SiWhatsapp />
              </span>
            </span>
          </Link>
          <Link href="https://wa.link/ezjvuo" target="_blank" className="w-full group relative hidden max-sm:grid overflow-hidden rounded-sm px-4 py-4 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 group">
            <span>
              <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-sm [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-px rounded-sm transition-colors bg-primary  group-hover:bg-neutral-900  max-md:cursor-pointer group-hover:bg-secondary duration-300 ease-linear" />
            <span className="z-10 text-neutral-400 text-sm font-medium max-md:cursor-pointer flex gap-3 items-center justify-between">
              <span className="text-2xl text-primary">
                <SiWhatsapp />
              </span>
              <span className="text-2xl group-hover:translate-y-[-7px] duration-300 ease-linear">
                <GoArrowUp />
              </span>
            </span>
          </Link>
        </div>
        <div className="h-[180px] max-w-20 max-sm:max-w-full max-sm:h-fit  max-sm:w-full max-sm:mt-12">
          <Link href="mailto:contatoesdrasoficial@gmail.com" target="_blank" className="max-sm:hidden h-full rotate-0 relative grid overflow-hidden rounded-md px-6 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 max-md:cursor-pointer group">
            <span>
              <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-md [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[950%] before:rotate-[-65deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-px rounded-md bg-primary transition-colors duration-300 group-hover:bg-secondary ease-linear" />
            <span className="z-10 text-primary flex flex-col h-full justify-between items-center text-sm font-medium pb-5">
              <span className="text-2xl group-hover:translate-y-[-15px] duration-300 ease-linear">
                <GoArrowUp />
              </span>
              <span className="text-2xl">
                <LuMail />
              </span>
            </span>
          </Link>
          <Link href="mailto:contatoesdrasoficial@gmail.com" target="_blank" className="w-full group relative hidden max-sm:grid overflow-hidden rounded-sm px-4 py-4 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 group">
            <span>
              <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-sm [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-px rounded-sm transition-colors bg-primary  group-hover:bg-neutral-900  max-md:cursor-pointer group-hover:bg-secondary duration-300 ease-linear" />
            <span className="z-10 text-neutral-400 text-sm font-medium max-md:cursor-pointer flex gap-3 items-center justify-between">
              <span className="text-2xl">
                <LuMail />
              </span>
              <span className="text-2xl group-hover:translate-y-[-7px] duration-300 ease-linear">
                <GoArrowUp />
              </span>
            </span>
          </Link>
        </div>
        <div className="h-[180px] max-w-20 max-sm:max-w-full max-sm:h-fit  max-sm:w-full max-sm:mt-12">
          <Link href="https://github.com/esdrasfyy" target="_blank" className="max-sm:hidden h-full rotate-0 relative grid overflow-hidden rounded-md px-6 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 max-md:cursor-pointer group">
            <span>
              <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-md [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[950%] before:rotate-[-65deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-px rounded-md bg-primary transition-colors duration-300 group-hover:bg-secondary ease-linear" />
            <span className="z-10 text-primary flex flex-col h-full justify-between items-center text-sm font-medium pb-5">
              <span className="text-2xl group-hover:translate-y-[-15px] duration-300 ease-linear">
                <GoArrowUp />
              </span>
              <span className="text-2xl">
                <FiGithub />
              </span>
            </span>
          </Link>
          <Link href="https://github.com/esdrasfyy" target="_blank" className="w-full group relative hidden max-sm:grid overflow-hidden rounded-sm px-4 py-4 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 group">
            <span>
              <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-sm [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-px rounded-sm transition-colors bg-primary  group-hover:bg-neutral-900  max-md:cursor-pointer group-hover:bg-secondary duration-300 ease-linear" />
            <span className="z-10 text-neutral-400 text-sm font-medium max-md:cursor-pointer flex gap-3 items-center justify-between">
              <span className="text-2xl">
                <FiGithub />
              </span>
              <span className="text-2xl group-hover:translate-y-[-7px] duration-300 ease-linear">
                <GoArrowUp />
              </span>
            </span>
          </Link>
        </div>
        <div className="h-[180px] max-w-20 max-sm:max-w-full max-sm:h-fit  max-sm:w-full max-sm:mt-12">
          <Link href="https://www.linkedin.com/in/esdrasfyy/" target="_blank" className="max-sm:hidden h-full rotate-0 relative grid overflow-hidden rounded-md px-6 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 max-md:cursor-pointer group">
            <span>
              <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-md [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[950%] before:rotate-[-65deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-px rounded-md bg-primary transition-colors duration-300 group-hover:bg-secondary ease-linear" />
            <span className="z-10 text-primary flex flex-col h-full justify-between items-center text-sm font-medium pb-5">
              <span className="text-2xl group-hover:translate-y-[-15px] duration-300 ease-linear">
                <GoArrowUp />
              </span>
              <span className="text-2xl">
                <RiLinkedinLine />
              </span>
            </span>
          </Link>
          <Link href="https://www.linkedin.com/in/esdrasfyy/" target="_blank" className="w-full group relative hidden max-sm:grid overflow-hidden rounded-sm px-4 py-4 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 group">
            <span>
              <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-sm [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-px rounded-sm transition-colors bg-primary  group-hover:bg-neutral-900  max-md:cursor-pointer group-hover:bg-secondary duration-300 ease-linear" />
            <span className="z-10 text-neutral-400 text-sm font-medium max-md:cursor-pointer flex gap-3 items-center justify-between">
              <span className="text-2xl">
                <RiLinkedinLine />
              </span>
              <span className="text-2xl group-hover:translate-y-[-7px] duration-300 ease-linear">
                <GoArrowUp />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
