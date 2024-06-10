"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import { Slide } from "./slide";
import { i18n } from "@/app/translate/i18n";
import { RiCss3Fill, RiHtml5Fill, RiTailwindCssFill } from "react-icons/ri";
const SliderLerns= () => {
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
      gif: "/notes.png",
      title: i18n.t("creations.projects.notes.title"),
      date: i18n.t("creations.projects.notes.date"),
      description: i18n.t("creations.projects.notes.description"),
      url: i18n.t("creations.projects.notes.url"),
      techs: [RiTailwindCssFill, RiHtml5Fill, RiCss3Fill],
    },
    {
      gif: "/cuba.png",
      title: i18n.t("creations.projects.cuba.title"),
      date: i18n.t("creations.projects.cuba.date"),
      description: i18n.t("creations.projects.cuba.description"),
      url: i18n.t("creations.projects.cuba.url"),
      techs: [RiTailwindCssFill, RiHtml5Fill, RiCss3Fill],
    },
    {
      gif: "/ecommerce.png",
      title: i18n.t("creations.projects.urbanvogue.title"),
      date: i18n.t("creations.projects.urbanvogue.date"),
      description: i18n.t("creations.projects.urbanvogue.description"),
      url: i18n.t("creations.projects.urbanvogue.url"),
      techs: [RiTailwindCssFill, RiHtml5Fill, RiCss3Fill],
    },
    {
      gif: "/github.png",
      title: i18n.t("creations.projects.others.title"),
      date: i18n.t("creations.projects.others.date"),
      description: i18n.t("creations.projects.others.description"),
      url: i18n.t("creations.projects.others.url"),
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

export { SliderLerns};
