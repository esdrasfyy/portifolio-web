import React from "react";
import { ButtonDefault } from "../../ui/buttons/default/button-default";
import Image from "next/image";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import { map } from "jquery";
import { i18n } from "@/app/translate/i18n";

function Slide({ project }) {
  return (
    <div className="blog-slider__item flex items-center swiper-slide">
      <div className="blog-slider__img min-w-[420px] max-w-[420px] h-[250px] max-sm:min-w-[300px] max-sm:h-[200px] grayscale hover:grayscale-0 duration-300 ease-linear border-[1px] border-[var(--color-text-primary)] rounded-md bg-secondary -translate-x-20 shrink overflow-hidden">
        <Image src={project.gif} alt="" fill quality={100} />
        <div className="flex flex-col gap-4 absolute px-2 py-3 rounded-md text-xl bg-primary opacity-60">
          {project.techs.map((Tech) => (
            <span key={Tech}>
              <Tech />
            </span>
          ))}
        </div>
      </div>
      <div className="blog-slider__content max-sm:mt-[-20px]">
        <div className="blog-slider__title">{project.title}</div>
        <div className="blog-slider__text">{project.description}</div>
        <ButtonDefault
          href={project.url}
          Icon={FiExternalLink}
          content={i18n.t("creations.titles.see_deploy")}
          iconStyles=""
        />
      </div>
    </div>
  );
}

export { Slide };
