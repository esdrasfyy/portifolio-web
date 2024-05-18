"use client";
import React, { useEffect } from "react";
import $ from "jquery";
import Swiper from "swiper";
import { Slide } from "./slide";
const Slider = () => {
  useEffect(() => {
    new Swiper(".blog-slider", {
      spaceBetween: 30,
      effect: "fade",
      loop: true,
      mousewheel: {
        invert: false,
      },
      pagination: {
        el: ".blog-slider__pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <div className="blog-slider w-full max-w-[800px] relative border-[1px] border-[var(--color-text-primary)] p-7 rounded-md h-[400px] transition-all duration-300 flex justify-between h-full">
      <div className="blog-slider__wrp swiper-wrapper">
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </div>
      <div className="blog-slider__pagination"></div>
    </div>
  );
};

export { Slider };
