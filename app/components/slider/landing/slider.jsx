"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import { Slide } from "./slide";
import { i18n } from "@/app/translate/i18n";
import { RiCss3Fill, RiHtml5Fill, RiTailwindCssFill } from "react-icons/ri";
const SliderLandingPages = () => {
  useEffect(() => {
    new Swiper(".blog-slider", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      autoplay: {
        delay: 6500,
      },
      mousewheel: {
        invert: false,
      },
      pagination: {
        clickable: true,
        el: ".blog-slider__pagination",
      },
    });
  }, []);
  const landingpages = [
    {
      gif: "/hotel.png",
      title: i18n.t("creations.projects.hotel.title"),
      date: i18n.t("creations.projects.hotel.date"),
      description: i18n.t("creations.projects.hotel.description"),
      url: i18n.t("creations.projects.hotel.url"),
      techs: [RiTailwindCssFill, RiHtml5Fill, RiCss3Fill],
    },
    {
      gif: "/advocacia.png",
      title: i18n.t("creations.projects.advocacia.title"),
      date: i18n.t("creations.projects.advocacia.date"),
      description: i18n.t("creations.projects.advocacia.description"),
      url: i18n.t("creations.projects.advocacia.url"),
      techs: [RiTailwindCssFill, RiHtml5Fill, RiCss3Fill],
    },
    {
      gif: "/cabeleleiro.png",
      title: i18n.t("creations.projects.cabeleleiro.title"),
      date: i18n.t("creations.projects.cabeleleiro.date"),
      description: i18n.t("creations.projects.cabeleleiro.description"),
      url: i18n.t("creations.projects.cabeleleiro.url"),
      techs: [RiTailwindCssFill, RiHtml5Fill, RiCss3Fill],
    },
  ];
  return (
    <div className="blog-slider w-full max-w-[800px] relative border-[1px] border-[var(--color-text-primary)] p-7 rounded-md h-[400px] transition-all duration-300">
      <div className="blog-slider__wrp swiper-wrapper">
        {Array.isArray(landingpages) &&
          landingpages.map((project, index) => (
            <Slide project={project} key={index} />
          ))}
      </div>
      <div className="blog-slider__pagination"></div>
    </div>
  );
};

export { SliderLandingPages };
