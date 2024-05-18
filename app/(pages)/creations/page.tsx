import { Slider } from "@/app/components/slider/slider";
import { i18n } from "@/app/translate/i18n";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { GoArrowUp } from "react-icons/go";
import { IoIosMail } from "react-icons/io";

function Creations() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-start items-center px-12 pt-[10vh] max-sm:px-4 overflow-x-hidden">
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
      <section className="max-w-[900px] w-full mt-12 flex justify-center items-center gap-2">
        <div className="w-full text-left mb-8">
          <div>
            <h2 className="text-4xl font-extralight">LANDING PAGES</h2>
          </div>
          <Slider />
        </div>
        <aside className="flex min-h-[400px] justify-between flex-col font-black text-9xl opacity-5 max-lg:hidden">
          <span>5</span>
          <span>0</span>
          <span>0</span>
        </aside>
      </section>
      <section className="max-w-[900px] w-full mt-12 flex justify-center items-center gap-2">
        <div className="w-full text-left mb-8">
          <div>
            <h2 className="text-4xl font-extralight">JUST TO LEARN</h2>
          </div>
          <Slider />
        </div>
        <aside className="flex min-h-[400px] justify-between flex-col font-black text-9xl opacity-5 max-lg:hidden">
          <span>2</span>
          <span>0</span>
          <span>0</span>
        </aside>
      </section>
      <div className="my-24 max-sm:my-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="132"
          height="15"
          viewBox="0 0 132 15"
        >
          <g id="Page-1" fill="none" fill-rule="evenodd">
            <g id="Artboard-2" fill="var(--color-text-primary)" opacity={0.5}>
              <path
                id="Combined-Shape"
                d="M124.003 6.003L118.5.5 118 0l-13 13L92 0l-.5.5L79 13 66.5.5 66 0 53 13 40 0l-.5.5L27 13 14.5.5 14 0 8.203 5.797l.01.01L.01 14.01 1 15 14 2l13 13L40 2l13 13L66 2l13 13L92 2l13 13 13-13 13 13 .997-.997L124 6.007l.003-.004zm17.6-3.606L143.5.5l.5-.5 13 13 13-13 .5.5L183 13 195.5.5l.5-.5 13 13 13-13 .5.5L235 13 247.5.5l.5-.5 13 13L273.5.5l.5-.5 13 13L299.5.5l.5-.5 13 13 13-13 .5.5L339 13 351.5.5l.5-.5 13 13L377.5.5l.5-.5 13 13L403.5.5l.5-.5 13 13 13-13 .5.5L443 13 455.5.5l.5-.5 13 13 13-13 .5.5L495 13 507.5.5l.5-.5 13 13 13-13 .5.5L547 13 559.5.5l.5-.5 13 13L585.5.5l.5-.5 13 13L611.5.5l.5-.5 13 13 13-13 .5.5L651 13 663.5.5l.5-.5 13 13 13-13 .5.5L703 13 715.5.5l.5-.5 13 13 13-13 .5.5L755 13 767.5.5l.5-.5 13 13 13-13 .5.5L807 13 819.5.5l.5-.5 13 13 13-13 .5.5L859 13 871.5.5l.5-.5 13 13L897.5.5l.5-.5 13 13L923.5.5l.5-.5 13 13 13-13 .5.5L963 13 975.5.5l.5-.5 13 13L1001.5.5l.5-.5 13 13L1027.5.5l.5-.5 13 13 13-13 .5.5L1067 13 1079.5.5l.5-.5 13 13 13-13 .5.5L1119 13 1131.5.5l.5-.5 13 13 13-13 .5.5L1171 13 1183.5.5l.5-.5 13 13L1209.5.5l.5-.5 13 13L1235.5.5l.5-.5 13 13 13-13 .5.5L1275 13 1287.5.5l.5-.5 13 13L1313.5.5l.5-.5 13 13L1339.5.5l.5-.5 13 13 13-13 .5.5L1379 13 1391.5.5l.5-.5 13 13 13-13 .5.5L1431 13 1443.5.5l.5-.5 13 13 13-13 .5.5L1483 13 1495.5.5l.5-.5 13 13L1521.5.5l.5-.5 13 13L1547.5.5l.5-.5 13 13 13-13 .5.5L1587 13 1599.5.5l.5-.5 13 13L1625.5.5l.5-.5 13 13L1651.5.5l.5-.5 13 13 13-13 .5.5L1691 13 1703.5.5l.5-.5 13 13 13-13 .5.5L1743 13 1755.5.5l.5-.5 13 13 13-13 .5.5L1795 13 1807.5.5l.5-.5 13 13L1833.5.5l.5-.5 13 13L1859.5.5l.5-.5 13 13 13-13 .5.5L1899 13 1911.5.5l.5-.5 13 13 13-13 .5.5L1951 13 1963.5.5l.5-.5 13 13 13-13 .5.5L2003 13 2015.5.5l.5-.5 13 13 13-13 .5.5L2055 13 2067.5.5l.5-.5 13 13 13-13 .5.5L2107 13 2119.5.5l.5-.5 13 13L2145.5.5l.5-.5 13 13L2171.5.5l.5-.5 13 13 13-13 .5.5L2211 13 2223.5.5l.5-.5 13 13L2249.5.5l.5-.5 13 13L2275.5.5l.5-.5 13 13 13-13 .5.5L2315 13 2327.5.5l.5-.5 13 13 13-13 .5.5L2367 13 2379.5.5l.5-.5 13 13 13-13 .5.5L2419 13 2431.5.5l.5-.5 13 13L2457.5.5l.5-.5 13 13L2483.5.5l.5-.5 13 13 13-13 .5.5L2523 13 2535.5.5l.5-.5 13 13 13-13 1 1-14 14-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-1.397 1.397-1-1zm-151.2.006L-12 0l-.5.5L-25 13-38 0l-.5.5L-51 13-64 0l-.5.5L-77 13-89.5.5-90 0l-13 13-13-13-.5.5L-129 13-141.5.5l-.5-.5-13 13-13-13-.5.5L-181 13-193.5.5l-.5-.5-13 13-13-13-.5.5L-233 13l-13-13-.5.5L-259 13l-13-13-.5.5L-285 13-297.5.5l-.5-.5-13 13-13-13-.5.5L-337 13l-13-13-.5.5L-363 13l-13-13-.5.5L-389 13-401.5.5l-.5-.5-13 13-13-13-.5.5L-441 13-453.5.5l-.5-.5-13 13-13-13-.5.5L-493 13-505.5.5l-.5-.5-13 13-13-13-.5.5L-545 13-557.5.5l-.5-.5-13 13-13-13-.5.5L-597 13-609.5.5l-.5-.5-13 13-13-13-.5.5L-649 13l-13-13-.5.5L-675 13l-13-13-.5.5L-701 13-713.5.5l-.5-.5-13 13-13-13-.5.5L-753 13-765.5.5l-.5-.5-13 13-13-13-.5.5L-805 13-817.5.5l-.5-.5-13 13-13-13-.5.5L-857 13l-13-13-.5.5L-883 13l-13-13-.5.5L-909 13-921.5.5l-.5-.5-13 13-13-13-.5.5L-961 13l-13-13-.5.5L-987 13l-13-13-.5.5L-1013 13-1025.5.5l-.5-.5-13 13-13-13-.5.5L-1065 13-1077.5.5l-.5-.5-13 13-13-13-.5.5L-1117 13-1129.5.5l-.5-.5-13 13-13-13-.5.5L-1169 13l-13-13-.5.5L-1195 13l-13-13-.5.5L-1221 13-1233.5.5l-.5-.5-13 13-13-13-.5.5L-1273 13l-13-13-.5.5L-1299 13l-13-13-.5.5L-1325 13-1337.5.5l-.5-.5-13 13-13-13-.5.5L-1377 13-1389.5.5l-.5-.5-13 13-13-13-.5.5L-1429 13-1441.5.5l-.5-.5-13 13-13-13-.5.5L-1481 13l-13-13-.5.5L-1507 13l-13-13-.5.5L-1533 13-1545.5.5l-.5-.5-13 13-13-13-.5.5L-1585 13l-13-13-.5.5L-1611 13l-13-13-.5.5L-1637 13-1649.5.5l-.5-.5-13 13-13-13-.5.5L-1689 13-1701.5.5l-.5-.5-13 13-13-13-.5.5L-1741 13-1753.5.5l-.5-.5-13 13-13-13-.5.5L-1793 13-1805.5.5l-.5-.5-13 13-13-13-.5.5L-1845 13-1857.5.5l-.5-.5-13 13-13-13-.5.5L-1897 13l-13-13-.5.5L-1923 13l-13-13-.5.5L-1949 13-1961.5.5l-.5-.5-13 13-13-13-.5.5L-2001 13-2013.5.5l-.5-.5-13 13-13-13-.5.5L-2053 13-2065.5.5l-.5-.5-13 13-13-13-.5.5L-2105 13l-13-13-.5.5L-2131 13l-13-13-.5.5L-2157 13-2169.5.5l-.5-.5-13 13-13-13-.5.5L-2209 13l-13-13-.5.5L-2235 13l-13-13-.5.5L-2261 13-2273.5.5l-.5-.5-13 13-13-13-.5.5L-2313 13-2325.5.5l-.5-.5-13 13-13-13-.5.5L-2365 13-2377.5.5l-.5-.5-13 13-13-13-.5.5L-2417 13l-13-13-1 1 14 14 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 1.403 1.403 1-1z"
              />
            </g>
          </g>
        </svg>
      </div>
      <section className="w-full flex justify-between max-sm:justify-center items-center max-w-[900px] max-sm:flex-col">
        <div className="text-3xl uppercase max-sm:w-full">
          <h3 className="max-w-72">
            TEM ALGUM PROJETO EM MENTE E GOSTARIA DE ME INCLUIR NESSA EQUIPE?
          </h3>
        </div>
        <div className="h-[180px]  max-sm:w-full max-sm:mt-12">
          <Link href="/contact" className="max-sm:hidden h-full rotate-0 relative grid overflow-hidden rounded-md px-6 py-2 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 max-md:cursor-pointer group">
            <span>
              <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-md [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[950%] before:rotate-[-65deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-px rounded-md bg-primary transition-colors duration-300 group-hover:bg-secondary ease-linear" />
            <span className="z-10 text-primary flex flex-col h-full justify-between items-center text-sm font-medium pb-5">
              <span className="text-2xl group-hover:translate-y-[-15px] duration-300 ease-linear">
                <GoArrowUp />
              </span>
              <span className="text-2xl">
                <IoIosMail />
              </span>
            </span>
          </Link>
          <Link href="/contact" className="w-full group relative hidden max-sm:grid overflow-hidden rounded-sm px-4 py-4 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 group">
            <span>
              <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-sm [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
            </span>
            <span className="backdrop absolute inset-px rounded-sm transition-colors bg-primary  group-hover:bg-neutral-900  max-md:cursor-pointer group-hover:bg-secondary duration-300 ease-linear" />
            <span className="z-10 text-neutral-400 text-sm font-medium max-md:cursor-pointer flex gap-3 items-center justify-between">
              <span className="text-2xl">
                <IoIosMail />
              </span>
              <span className="text-2xl group-hover:translate-y-[-7px] duration-300 ease-linear">
                <GoArrowUp />
              </span>
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Creations;
