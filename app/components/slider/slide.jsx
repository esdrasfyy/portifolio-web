import React from "react";
import { ButtonDefault } from "../ui/buttons/default/button-default";
import { MdLocalSee } from "react-icons/md";
import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

function Slide() {
  return (
    <div className="blog-slider__item flex items-center swiper-slide">
      <div className="blog-slider__img min-w-[420px] max-w-[420px] h-[280px] grayscale hover:grayscale-0 duration-300 ease-linear border-[1px] border-[var(--color-text-primary)] rounded-md bg-secondary -translate-x-20 shrink overflow-hidden">
        <Image src="/image.png" alt="" fill quality={100} priority />
        <div className="flex flex-col gap-4 absolute top-3 left-3 text-xl">

        <span>
          <BiLogoTypescript />
        </span>
        <span>
          <FaReact />
        </span>
        <span>
          <RiTailwindCssFill />
        </span>
        <span>
          <SiNextdotjs />
        </span>
        </div>
      </div>
      <div className="blog-slider__content">
        <span className="blog-slider__code opacity-5">26 December 2019</span>
        <div className="blog-slider__title">Lorem Ipsum Dolor</div>
        <div className="blog-slider__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
          voluptate repellendus magni illo ea animi?
        </div>
        <ButtonDefault Icon={MdLocalSee} content="Read More" iconStyles="" />
      </div>
    </div>
  );
}

export { Slide };
