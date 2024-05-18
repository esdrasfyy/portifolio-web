import { Slider } from "@/app/components/slider/slider";
import { i18n } from "@/app/translate/i18n";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

function Creations() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-start items-center px-12 pt-[10vh] max-sm:px-4 pb-44 overflow-x-hidden">
      <h1 className="text-7xl font-thin max-sm:text-6xl flex gap-8">
        <span className="line">{i18n.t("contact.titles.one")}</span>
      </h1>
      <section className="flex w-full h-fit max-w-[900px] max-md:h-auto justify-between items-center mt-32 gap-2 mr-24 max-md:mr-0">
        <aside className="flex min-h-[400px] justify-between flex-col font-black text-9xl opacity-5 max-md:hidden">
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </aside>
        <div className="w-full flex flex-col h-full">
          <div className="flex w-full justify-between items-center px-3 border-[1px] border-[#333]">
            <div className="w-full flex gap-2 py-3 ">
              <span className="w-4 h-4 bg-[#333] rounded-full"></span>
              <span className="w-4 h-4 bg-[#333] rounded-full"></span>
              <span className="w-4 h-4 bg-[#333] rounded-full"></span>
            </div>
            <div>
              <Link href="https://urbanvogue.cloud" target="_blank">
                <FiExternalLink />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-2 border-[1px] border-[#333] border-t-0 -mt-0.5 rounded-smd">
            <div className="flex w-full gap-2 max-lg:flex-col">
              <div className="flex flex-col gap-2">
                <div className="relative w-96 max-lg:w-full max-lg:h-[25vh] h-56 border-[1px] border-[#333] rounded-md">
                  <Image alt="" src="/image.png" fill />
                </div>
              </div>
              <div className="w-full min-h-full border-[1px] border-[#333] rounded-md p-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Recusandae
                voluptate repellendus magni illo ea animi? voluptate repellendus
                magni illo ea animi? voluptate animi?
              </div>
            </div>
            <div className="w-full h-full border-[1px] border-[#333] rounded-md p-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae voluptate repellendus magni illo ea animi?Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Recusandae voluptate
              repellendus magni illo ea animi? voluptate repellendus magni illo
              ea animi? voluptate animi? Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Recusandae voluptate repellendus magni illo ea
              animi?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae voluptate repellendus magni illo ea animi? voluptate
              repellendus magni illo ea animi? voluptate animi?Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Recusandae voluptate
              repellendus magni illo ea animi?Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Recusandae voluptate repellendus
              magni illo ea animi? voluptate repellendus magni illo ea animi?
              voluptate animi?
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[900px] w-full mt-12 flex justify-center items-center flex-col">
        <div className="w-full text-left mb-8">
          <h2 className="text-4xl font-extralight">LANDING PAGES</h2>
        </div>
        <Slider />
      </section>
      <section className="max-w-[900px] w-full mt-12 flex justify-center items-center flex-col max-md:mt-0">
        <div className="w-full text-left mb-8">
          <h2 className="text-4xl font-extralight">JUST TO LEARN</h2>
        </div>
        <Slider />
      </section>
    </main>
  );
}

export default Creations;
