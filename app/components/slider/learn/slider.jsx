"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";
import { Slide } from "./slide";
import { i18n } from "@/app/translate/i18n";
const Slider = () => {
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
      gif: "/restaurante.png",
      title: i18n.t("creations.projects.restaurante.title"),
      date: i18n.t("creations.projects.restaurante.date"),
      description: i18n.t("creations.projects.restaurante.description"),
      url: i18n.t("creations.projects.restaurante.url"),
    },
    {
      gif: "/academia.png",
      title: i18n.t("creations.projects.academia.title"),
      date: i18n.t("creations.projects.academia.date"),
      description: i18n.t("creations.projects.academia.description"),
      url: i18n.t("creations.projects.academia.url"),
    },
    {
      gif: "/cabeleleiro.png",
      title: i18n.t("creations.projects.cabeleleiro.title"),
      date: i18n.t("creations.projects.cabeleleiro.date"),
      description: i18n.t("creations.projects.cabeleleiro.description"),
      url: i18n.t("creations.projects.cabeleleiro.url"),
    },
    {
      gif: "/hotel.png",
      title: i18n.t("creations.projects.hotel.title"),
      date: i18n.t("creations.projects.hotel.date"),
      description: i18n.t("creations.projects.hotel.description"),
      url: i18n.t("creations.projects.hotel.url"),
    },
    {
      gif: "/advocacia.png",
      title: i18n.t("creations.projects.advocacia.title"),
      date: i18n.t("creations.projects.advocacia.date"),
      description: i18n.t("creations.projects.advocacia.description"),
      url: i18n.t("creations.projects.advocacia.url"),
    },
    {
      gif: "/petshop.png",
      title: i18n.t("creations.projects.petshop.title"),
      date: i18n.t("creations.projects.petshop.date"),
      description: i18n.t("creations.projects.petshop.description"),
      url: i18n.t("creations.projects.petshop.url"),
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

export { Slider };
