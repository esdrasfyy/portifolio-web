import { Slider } from "@/app/components/slider/slider";
import { i18n } from "@/app/translate/i18n";
import React from "react";

function Creations() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-start items-center px-12 pt-[10vh] max-sm:px-4 pb-44 overflow-x-hidden">
      <h1 className="text-7xl font-thin max-sm:text-6xl flex gap-8">
        <span className="line">{i18n.t("contact.titles.one")}</span>
      </h1>
      <section className="flex w-full h-[400px] max-w-[1050px] max-md:h-[750px]  justify-between items-center mt-32 gap-12">
        <aside className="flex min-h-[400px] justify-between flex-col font-black text-9xl opacity-5">
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </aside>
      </section>
      <section className="max-w-[900px] w-full h-96 body">
        <h2>LANDING PAGES</h2>
        <Slider />
      </section>
      <section className="max-w-[900px] w-full h-96 body">
        <h2>LANDING PAGES</h2>
        <Slider />
      </section>
      <section className="max-w-[900px] w-full h-96 body">
        <h2>LANDING PAGES</h2>
        <Slider />
      </section>
    </main>
  );
}

export default Creations;
