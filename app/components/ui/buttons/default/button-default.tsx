import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

function ButtonDefault({
  content,
  Icon,
  iconStyles,
  href,
}: {
  href: string;
  content: string;
  Icon: IconType;
  iconStyles: string;
}) {
  return (
    <Link
      target="_blank"
      href={href}
      className="w-full group relative grid overflow-hidden rounded-sm px-4 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 group"
    >
      <span>
        <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-sm [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
      </span>
      <span className="backdrop absolute inset-px rounded-sm transition-colors bg-primary  group-hover:bg-neutral-900  max-md:cursor-pointer group-hover:bg-secondary duration-300 ease-linear" />
      <span className="z-10 text-neutral-400 text-sm font-medium max-md:cursor-pointer flex gap-3 items-center justify-between">
        {content}
        <span className={`${iconStyles}`}>{<Icon />}</span>
      </span>
    </Link>
  );
}

export { ButtonDefault };
