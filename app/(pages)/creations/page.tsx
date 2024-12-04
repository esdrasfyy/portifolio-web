"use client";
import { Footer } from "@/app/components/footer/footer";
import { ContextPreferences } from "@/app/contexts/ContextPreferences";
import { i18n } from "@/app/translate/i18n";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { SiInstagram, SiJavascript, SiLaravel, SiNestjs, SiNextdotjs, SiPhp, SiTypescript, SiWhatsapp } from "react-icons/si";
import { TbBrandDiscord } from "react-icons/tb";

function Creations() {
  const context = useContext(ContextPreferences!)!;
  return (
    <>
      <main className="min-h-screen w-full flex flex-col justify-start items-center pb-32 px-12 pt-[10vh] max-sm:px-4 overflow-x-hidden">
        <h1 className="text-7xl font-thin max-sm:text-6xl flex gap-8 uppercase">
          <span className="line">{i18n.t("creations.titles.one")}</span>
        </h1>
        <section className="bg-primary mt-12 text-primary rounded-xl">
          <h2 className="text-4xl font-extralight pl-[100px] pb-8 max-[1200px]:pl-0">CIDADE ALTA RP</h2>
          <div className="flex max-[1200px]:flex-col">
            <div className="p-10 my-auto max-[1200px]:hidden">
              <h3 className="writing font-lg tracking-widest">PLATAFORMA</h3>
            </div>
            <Image src="/cda.png" alt="" height={1000} width={1000} className="h-[450px] w-[800px] max-[1200px]:w-full max-md:h-[300px] max-sm:h-[200px]" />
            <div className="flex flex-col justify-between items-end px-10 max-[1200px]:mt-12 max-[1200px]:px-0">
              <div className="w-full flex justify-between max-[1200px]:pb-6">
                <ul className="flex text-2xl gap-5 items-center">
                  <li className="opacity-50 duration-300 hover:opacity-100">
                    <Link target="_blank" href="https://www.instagram.com/cidadealtarp/">
                      <SiInstagram />
                    </Link>
                  </li>
                  <li className="opacity-50 duration-300 hover:opacity-100 text-3xl">
                    <Link target="_blank" href="https://discord.com/invite/cidadealtarp">
                      <TbBrandDiscord />
                    </Link>
                  </li>
                  <li className="opacity-50 duration-300 hover:opacity-100 text-4xl">
                    <Link target="_blank" href="https://cidadealtarp.com/">
                      <GoArrowUpRight />
                    </Link>
                  </li>
                </ul>
                <ul className="flex text-2xl gap-5">
                  <li className="opacity-50 duration-300 hover:opacity-100">
                    <SiNestjs />
                  </li>
                  <li className="opacity-50 duration-300 hover:opacity-100">
                    <SiNextdotjs />
                  </li>
                  <li className="opacity-50 duration-300 hover:opacity-100">
                    <SiTypescript />
                  </li>
                </ul>
              </div>
              <div className="max-[1200px]:pb-6">
                <p className="text-lg text-justify tracking-wider max-md:text-base">{i18n.t("creations.titles.cda")}</p>
              </div>
              <div className="w-full flex justify-between font-bold opacity-50 max-sm:text-xs">
                <p>FULLSTASK DEVELOPER JUNIOR</p>
                <p>06/2024 - 10/2024</p>
              </div>
            </div>
          </div>
        </section>
        <hr className="bg-secondary w-full opacity-40 mt-12" />
        <section className="bg-primary mt-12 text-primary rounded-xl">
          <h2 className="text-4xl font-extralight pl-[100px] pb-8 max-[1200px]:pl-0">SNAPIC TECNOLOGIA</h2>
          <div className="flex max-[1200px]:flex-col">
            <div className="p-10 my-auto max-[1200px]:hidden">
              <h3 className="writing font-lg tracking-widest">PLATAFORMA</h3>
            </div>
            <Image src="/snapic.png" alt="" height={1000} width={1000} className="h-[450px] w-[800px] max-[1200px]:w-full max-md:h-[300px] max-sm:h-[200px]" />
            <div className="flex flex-col justify-between items-end px-10 max-[1200px]:mt-12 max-[1200px]:px-0">
              <div className="w-full flex justify-between max-[1200px]:pb-6">
                <ul className="flex text-2xl gap-5 items-center">
                  <li className="opacity-50 duration-300 hover:opacity-100">
                    <Link target="_blank" href="https://www.instagram.com/snapicbr/">
                      <SiInstagram />
                    </Link>
                  </li>
                  <li className="opacity-50 duration-300 hover:opacity-100 text-4xl">
                    <Link target="_blank" href="https://www.snapic.com.br">
                      <GoArrowUpRight />
                    </Link>
                  </li>
                </ul>
                <ul className="flex text-2xl gap-5 items-center">
                  <li className="opacity-50 duration-300 hover:opacity-100">
                    <SiLaravel />
                  </li>
                  <li className="opacity-50 duration-300 hover:opacity-100 text-4xl">
                    <SiPhp />
                  </li>
                  <li className="opacity-50 duration-300 hover:opacity-100">
                    <SiJavascript />
                  </li>
                </ul>
              </div>
              <div className="max-[1200px]:pb-6">
                <p className="text-lg text-justify tracking-wider max-md:text-base">{i18n.t("creations.titles.snapic")}</p>
              </div>
              <div className="w-full flex justify-between font-bold opacity-50 max-sm:text-xs">
                <p>FULLSTASK DEVELOPER PLENO</p>
                <p>07/2024 - ATUAL</p>
              </div>
            </div>
          </div>
        </section>
        <hr className="bg-secondary w-full opacity-40 mt-12" />
        <section className="bg-primary mt-12 text-primary rounded-xl">
          <h2 className="text-4xl font-extralight pl-[100px] pb-8 max-[1200px]:pl-0">FRANCIELE CRUZ</h2>
          <div className="flex max-[1200px]:flex-col">
            <div className="p-10 my-auto max-[1200px]:hidden">
              <h3 className="writing font-lg tracking-widest">LANDING PAGE</h3>
            </div>
            <Image src="/franciele.png" alt="" height={1000} width={1000} className="h-[450px] w-[800px] max-[1200px]:w-full max-md:h-[300px] max-sm:h-[200px]" />
            <div className="flex flex-col justify-between items-end px-10 max-[1200px]:mt-12 max-[1200px]:px-0">
              <div className="w-full flex justify-between max-[1200px]:pb-6">
                <ul className="flex text-2xl gap-5 items-center">
                  <li className="opacity-50 duration-300 hover:opacity-100">
                    <Link target="_blank" href="https://wa.link/iahv2w">
                      <SiWhatsapp />
                    </Link>
                  </li>
                  <li className="opacity-50 duration-300 hover:opacity-100 text-4xl">
                    <Link target="_blank" href="https://drafrancielecruz.com.br/">
                      <GoArrowUpRight />
                    </Link>
                  </li>
                </ul>
                <ul className="flex text-2xl gap-5">
                  <li className="opacity-50 duration-300 hover:opacity-100">
                    <SiNextdotjs />
                  </li>
                  <li className="opacity-50 duration-300 hover:opacity-100">
                    <SiTypescript />
                  </li>
                </ul>
              </div>
              <div className="max-[1200px]:pb-6">
                <p className="text-lg text-justify tracking-wider max-md:text-base">{i18n.t("creations.titles.franciele")}</p>
              </div>
              <div className="w-full flex justify-between font-bold opacity-50 max-sm:text-xs">
                <p>FULLSTASK DEVELOPER PLENO</p>
                <p>12/2024</p>
              </div>
            </div>
          </div>
        </section>
        <hr className="bg-secondary w-full opacity-40 mt-12" />
        <section className="bg-primary mt-12 text-primary rounded-xl">
          <h2 className="text-4xl font-extralight pl-[100px] pb-8 max-[1200px]:pl-0">URBAN VOGUE</h2>
          <div className="flex max-[1200px]:flex-col">
            <div className="p-10 my-auto max-[1200px]:hidden">
              <h3 className="writing font-lg tracking-widest">ECOMMERCE</h3>
            </div>
            <Image src="/ecommerce.png" alt="" height={1000} width={1000} className="h-[450px] w-[800px] max-[1200px]:w-full max-md:h-[300px] max-sm:h-[200px]" />
            <div className="flex flex-col justify-between items-end px-10 max-[1200px]:mt-12 max-[1200px]:px-0">
              <div className="w-full flex justify-between max-[1200px]:pb-6">
                <ul className="flex text-2xl gap-5 items-center">
                  <li className="opacity-50 duration-300 hover:opacity-100 text-4xl">
                    <Link target="_blank" href="https://urbanvogue.cloud/">
                      <GoArrowUpRight />
                    </Link>
                  </li>
                </ul>
                <ul className="flex text-2xl gap-5 items-center">
                  <li className="opacity-50 duration-300 hover:opacity-100">
                    <SiNestjs />
                  </li>
                  <li className="opacity-50 duration-300 hover:opacity-100">
                    <SiNextdotjs />
                  </li>
                  <li className="opacity-50 duration-300 hover:opacity-100">
                    <SiTypescript />
                  </li>
                </ul>
              </div>
              <div className="max-[1200px]:pb-6">
                <p className="text-lg text-justify tracking-wider max-md:text-base">{i18n.t("creations.titles.ecommerce")}</p>
              </div>
              <div className="w-full flex justify-between font-bold opacity-50 max-sm:text-xs">
                <p>FULLSTASK DEVELOPER PLENO</p>
                <p>11/2024 - ATUAL</p>
              </div>
            </div>
          </div>
        </section>
        {/* 
        <section className="bg-primary mt-12 text-primary rounded-xl">
          <h2 className="text-4xl font-extralight pl-[100px] pb-8">URBAN VOGUE</h2>
          <div className="flex">
            <div className="p-10 my-auto">
              <h3 className="writing font-lg tracking-widest">ECOMMERCE</h3>
            </div>
            <Image src="/ecommerce.png" alt="" height={1000} width={1000} className="h-[450px] w-[800px]" />
            <div className="flex flex-col justify-between items-end px-10">
              <div className="w-full flex justify-between">
                <ul className="flex text-2xl gap-5 items-center">
                  <li className="opacity-50 duration-300 hover:opacity-100 text-4xl">
                    <Link target="_blank" href="https://urbanvogue.cloud/">
                      <GoArrowUpRight />
                    </Link>
                  </li>
                </ul>
                <ul className="flex text-2xl gap-5 items-center">
                  <li className="opacity-50 duration-300 hover:opacity-100">
                    <SiNestjs />
                  </li>
                  <li className="opacity-50 duration-300 hover:opacity-100">
                    <SiNextdotjs />
                  </li>
                  <li className="opacity-50 duration-300 hover:opacity-100">
                    <SiTypescript />
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-lg text-justify tracking-wider">
                  Estou motivado a recriar um e-commerce que inicialmente desenvolvi para aprendizado, agora transformando-o em uma solução white label profissional. Meu objetivo é garantir escalabilidade semelhante à da Snapic, utilizando tecnologias como Next.js, Nest.js, TypeScript e MySQL, além de aplicar princípios SOLID e Clean Code, que aprendi na Cidade Alta e em projetos pessoais. Este está se tornando meu melhor projeto até agora, tanto em termos de código quanto de interface.
                </p>
              </div>
              <div className="w-full flex justify-between font-bold opacity-50">
                <p>FULLSTASK DEVELOPER PLENO</p>
                <p>11/2024 - ATUAL</p>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}

export default Creations;
