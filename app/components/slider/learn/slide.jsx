import React from "react";
import { ButtonDefault } from "../../ui/buttons/default/button-default";
import { MdLocalSee } from "react-icons/md";
import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";

function Slide({ project }) {
  return (
    <div className="blog-slider__item flex items-center swiper-slide">
      <div className="blog-slider__img min-w-[420px] max-w-[420px] h-[280px] max-sm:min-w-[300px] max-sm:h-[200px] grayscale hover:grayscale-0 duration-300 ease-linear border-[1px] border-[var(--color-text-primary)] rounded-md bg-secondary -translate-x-20 shrink overflow-hidden">
        <Image src={project.gif} alt="" fill quality={100} priority />
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
      <div className="blog-slider__content max-sm:mt-[-20px]">
        <div className="blog-slider__title">{project.title}</div>
        <div className="blog-slider__text">
        {project.description}
        </div>
        <ButtonDefault Icon={MdLocalSee} content="Read More" iconStyles="" />
      </div>
    </div>
  );
}

export { Slide };
