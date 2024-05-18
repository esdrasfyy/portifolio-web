import { i18n } from "@/app/translate/i18n";
import { Timeline } from "antd";
import Image from "next/image";
import React from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { PiSignpostLight } from "react-icons/pi";

function About() {
  return (
    <main className="flex overflow-y-hidden w-full min-h-screen flex-col items-center px-12  bg-blend-difference text-white pt-[10vh] max-md:px-4">
      <h1 className="text-7xl font-thin max-sm:text-6xl max-sm:mb-12 flex gap-8">
        <span className="line">{i18n.t("about.titles.one")}</span>
        <span className="line">{i18n.t("about.titles.two")}</span>
      </h1>
      <section className="flex w-full justify-between mt-12 max-sm:flex-col ">
        <div className="flex relative justify-center items-center max-w-[515px] max-lg:max-w-[430px] max-md:max-w-[390px] max-sm:mx-auto max-sm:max-w-[490px]">
          <span className="absolute w-20 rounded-sm h-[115%] top-[-7%] left-12 bg-[white]  mix-blend-difference max-sm:left-1/2 max-sm:translate-x-[-50%] max-sm:w-10"></span>
          <h2 className="font-extrabold text-7xl text-primary w-full max-lg:text-6xl max-md:text-5xl max-sm:text-3xl max-sm:text-center">
            <span>
            {i18n.t("about.text.one")}
            </span>
          </h2>
        </div>
        <div className="max-w-[700px] w-full flex justify-center items-center flex-col gap-8 max-sm:mt-20">
          <div className="w-full flex items-center justify-between gap-12 max-sm:gap-4">
            <div className="w-full max-xl:hidden max-sm:flex flex items-center justify-center">
              <span className="w-14 h-14 max-sm:w-8 max-sm:h-8 rotate-45 border-[1px] border-[var(--color-text-primary)] opacity-50"></span>
            </div>
            <div className="w-full flex flex-col items-end  border-[1px] border-[var(--color-text-primary)] rounded-md  p-4 max-sm:min-w-[250px]">
              <h3 className="text-xl font-semibold mb-4 max-sm:text-sm">
                FRONT-END SKILLS
              </h3>
              <p className="text-sm max-md:text-xs text-primary/30 uppercase w-full text-end">
                React.Js, Next.Js, NextAuth, JavaScript (ES6+), TypeScript,
                Redux, Redux Toolkit, Wordpress, HTML5, Git/GitHub.
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-12 max-sm:gap-4">
            <div className="w-full flex flex-col border-[1px] border-[var(--color-text-primary)] rounded-md  p-4 max-sm:min-w-[250px]">
              <h3 className="text-xl font-semibold mb-4 max-sm:text-sm">
                FRONT-END SKILLS
              </h3>
              <p className="text-sm max-md:text-xs text-primary/30 uppercase w-full">
                React.Js, Next.Js, NextAuth, JavaScript (ES6+), TypeScript,
                Redux, Redux Toolkit, Wordpress, HTML5, Git/GitHub.
              </p>
            </div>
            <div className="w-full max-xl:hidden max-sm:flex flex items-center justify-center">
              <span className="w-14 h-14 max-sm:w-8 max-sm:h-8 rotate-45 border-[1px] border-[var(--color-text-primary)] opacity-50"></span>
            </div>
          </div>
          <div className="w-full flex items-center justify-between gap-12 max-sm:g">
            <div className="w-full max-xl:hidden max-sm:flex flex items-center justify-center">
              <span className="w-14 h-14 max-sm:w-8 max-sm:h-8 rotate-45 border-[1px] border-[var(--color-text-primary)] opacity-50"></span>
            </div>
            <div className="w-full flex flex-col items-end  border-[1px] border-[var(--color-text-primary)] rounded-md  p-4 max-sm:min-w-[250px]">
              <h3 className="text-xl font-semibold mb-4 max-sm:text-sm">
                FRONT-END SKILLS
              </h3>
              <p className="text-sm max-md:text-xs text-primary/30 uppercase w-full text-end">
                React.Js, Next.Js, NextAuth, JavaScript (ES6+), TypeScript,
                Redux, Redux Toolkit, Wordpress, HTML5, Git/GitHub.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="my-24 max-sm:my-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="132"
          height="15"
          viewBox="0 0 132 15"
        >
          <g id="Page-1" fill="none" fillRule="evenodd">
            <g id="Artboard-2" fill="var(--color-text-primary)" opacity={0.5}>
              <path
                id="Combined-Shape"
                d="M124.003 6.003L118.5.5 118 0l-13 13L92 0l-.5.5L79 13 66.5.5 66 0 53 13 40 0l-.5.5L27 13 14.5.5 14 0 8.203 5.797l.01.01L.01 14.01 1 15 14 2l13 13L40 2l13 13L66 2l13 13L92 2l13 13 13-13 13 13 .997-.997L124 6.007l.003-.004zm17.6-3.606L143.5.5l.5-.5 13 13 13-13 .5.5L183 13 195.5.5l.5-.5 13 13 13-13 .5.5L235 13 247.5.5l.5-.5 13 13L273.5.5l.5-.5 13 13L299.5.5l.5-.5 13 13 13-13 .5.5L339 13 351.5.5l.5-.5 13 13L377.5.5l.5-.5 13 13L403.5.5l.5-.5 13 13 13-13 .5.5L443 13 455.5.5l.5-.5 13 13 13-13 .5.5L495 13 507.5.5l.5-.5 13 13 13-13 .5.5L547 13 559.5.5l.5-.5 13 13L585.5.5l.5-.5 13 13L611.5.5l.5-.5 13 13 13-13 .5.5L651 13 663.5.5l.5-.5 13 13 13-13 .5.5L703 13 715.5.5l.5-.5 13 13 13-13 .5.5L755 13 767.5.5l.5-.5 13 13 13-13 .5.5L807 13 819.5.5l.5-.5 13 13 13-13 .5.5L859 13 871.5.5l.5-.5 13 13L897.5.5l.5-.5 13 13L923.5.5l.5-.5 13 13 13-13 .5.5L963 13 975.5.5l.5-.5 13 13L1001.5.5l.5-.5 13 13L1027.5.5l.5-.5 13 13 13-13 .5.5L1067 13 1079.5.5l.5-.5 13 13 13-13 .5.5L1119 13 1131.5.5l.5-.5 13 13 13-13 .5.5L1171 13 1183.5.5l.5-.5 13 13L1209.5.5l.5-.5 13 13L1235.5.5l.5-.5 13 13 13-13 .5.5L1275 13 1287.5.5l.5-.5 13 13L1313.5.5l.5-.5 13 13L1339.5.5l.5-.5 13 13 13-13 .5.5L1379 13 1391.5.5l.5-.5 13 13 13-13 .5.5L1431 13 1443.5.5l.5-.5 13 13 13-13 .5.5L1483 13 1495.5.5l.5-.5 13 13L1521.5.5l.5-.5 13 13L1547.5.5l.5-.5 13 13 13-13 .5.5L1587 13 1599.5.5l.5-.5 13 13L1625.5.5l.5-.5 13 13L1651.5.5l.5-.5 13 13 13-13 .5.5L1691 13 1703.5.5l.5-.5 13 13 13-13 .5.5L1743 13 1755.5.5l.5-.5 13 13 13-13 .5.5L1795 13 1807.5.5l.5-.5 13 13L1833.5.5l.5-.5 13 13L1859.5.5l.5-.5 13 13 13-13 .5.5L1899 13 1911.5.5l.5-.5 13 13 13-13 .5.5L1951 13 1963.5.5l.5-.5 13 13 13-13 .5.5L2003 13 2015.5.5l.5-.5 13 13 13-13 .5.5L2055 13 2067.5.5l.5-.5 13 13 13-13 .5.5L2107 13 2119.5.5l.5-.5 13 13L2145.5.5l.5-.5 13 13L2171.5.5l.5-.5 13 13 13-13 .5.5L2211 13 2223.5.5l.5-.5 13 13L2249.5.5l.5-.5 13 13L2275.5.5l.5-.5 13 13 13-13 .5.5L2315 13 2327.5.5l.5-.5 13 13 13-13 .5.5L2367 13 2379.5.5l.5-.5 13 13 13-13 .5.5L2419 13 2431.5.5l.5-.5 13 13L2457.5.5l.5-.5 13 13L2483.5.5l.5-.5 13 13 13-13 .5.5L2523 13 2535.5.5l.5-.5 13 13 13-13 1 1-14 14-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-13 13-13-13-1.397 1.397-1-1zm-151.2.006L-12 0l-.5.5L-25 13-38 0l-.5.5L-51 13-64 0l-.5.5L-77 13-89.5.5-90 0l-13 13-13-13-.5.5L-129 13-141.5.5l-.5-.5-13 13-13-13-.5.5L-181 13-193.5.5l-.5-.5-13 13-13-13-.5.5L-233 13l-13-13-.5.5L-259 13l-13-13-.5.5L-285 13-297.5.5l-.5-.5-13 13-13-13-.5.5L-337 13l-13-13-.5.5L-363 13l-13-13-.5.5L-389 13-401.5.5l-.5-.5-13 13-13-13-.5.5L-441 13-453.5.5l-.5-.5-13 13-13-13-.5.5L-493 13-505.5.5l-.5-.5-13 13-13-13-.5.5L-545 13-557.5.5l-.5-.5-13 13-13-13-.5.5L-597 13-609.5.5l-.5-.5-13 13-13-13-.5.5L-649 13l-13-13-.5.5L-675 13l-13-13-.5.5L-701 13-713.5.5l-.5-.5-13 13-13-13-.5.5L-753 13-765.5.5l-.5-.5-13 13-13-13-.5.5L-805 13-817.5.5l-.5-.5-13 13-13-13-.5.5L-857 13l-13-13-.5.5L-883 13l-13-13-.5.5L-909 13-921.5.5l-.5-.5-13 13-13-13-.5.5L-961 13l-13-13-.5.5L-987 13l-13-13-.5.5L-1013 13-1025.5.5l-.5-.5-13 13-13-13-.5.5L-1065 13-1077.5.5l-.5-.5-13 13-13-13-.5.5L-1117 13-1129.5.5l-.5-.5-13 13-13-13-.5.5L-1169 13l-13-13-.5.5L-1195 13l-13-13-.5.5L-1221 13-1233.5.5l-.5-.5-13 13-13-13-.5.5L-1273 13l-13-13-.5.5L-1299 13l-13-13-.5.5L-1325 13-1337.5.5l-.5-.5-13 13-13-13-.5.5L-1377 13-1389.5.5l-.5-.5-13 13-13-13-.5.5L-1429 13-1441.5.5l-.5-.5-13 13-13-13-.5.5L-1481 13l-13-13-.5.5L-1507 13l-13-13-.5.5L-1533 13-1545.5.5l-.5-.5-13 13-13-13-.5.5L-1585 13l-13-13-.5.5L-1611 13l-13-13-.5.5L-1637 13-1649.5.5l-.5-.5-13 13-13-13-.5.5L-1689 13-1701.5.5l-.5-.5-13 13-13-13-.5.5L-1741 13-1753.5.5l-.5-.5-13 13-13-13-.5.5L-1793 13-1805.5.5l-.5-.5-13 13-13-13-.5.5L-1845 13-1857.5.5l-.5-.5-13 13-13-13-.5.5L-1897 13l-13-13-.5.5L-1923 13l-13-13-.5.5L-1949 13-1961.5.5l-.5-.5-13 13-13-13-.5.5L-2001 13-2013.5.5l-.5-.5-13 13-13-13-.5.5L-2053 13-2065.5.5l-.5-.5-13 13-13-13-.5.5L-2105 13l-13-13-.5.5L-2131 13l-13-13-.5.5L-2157 13-2169.5.5l-.5-.5-13 13-13-13-.5.5L-2209 13l-13-13-.5.5L-2235 13l-13-13-.5.5L-2261 13-2273.5.5l-.5-.5-13 13-13-13-.5.5L-2313 13-2325.5.5l-.5-.5-13 13-13-13-.5.5L-2365 13-2377.5.5l-.5-.5-13 13-13-13-.5.5L-2417 13l-13-13-1 1 14 14 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 13 13 13-13 1.403 1.403 1-1z"
              />
            </g>
          </g>
        </svg>
      </div>
      <section className="flex w-full  mt-12 items-center flex-col pb-24 max-sm:pb-28">
        <div className="flex border-[var(--color-text-primary)] border-[1px] p-4 rounded-md w-full max-w-[660px] max-sm:text-center max-sm:border-none relative">
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-4 max-sm:text-xl relative">
              <span className="line">
             {i18n.t("about.titles.three")}
              </span>
            </h3>
            <p className="max-md:text-sm ">
            {i18n.t("about.text.two")}
            </p>
          </div>
          <span className="absolute -right-12 -top-[60px]  border-[var(--color-text-primary)] border-[1px] min-w-[200px] h-[200px] z-10 opacity-50 max-sm:hidden"></span>
          <span className="absolute -right-16 -top-10  border-[var(--color-text-primary)] border-[1px] min-w-[200px] h-[200px] z-10 opacity-50 max-sm:hidden"></span>
          <div className="w-fit object-fill translate-x-20 -translate-y-14 max-sm:hidden">
            <Image
              alt=""
              src="/my.webp"
              quality={100}
              priority
              width={100}
              height={100}
              className="min-w-[200px] h-[200px]"
            />
          </div>
        </div>
        <div className="w-full flex justify-between mt-28 max-sm:flex-col max-sm:gap-28">
          <div className="w-full max-sm:text-center">
            <h4 className="text-xl ml-2 mb-5 uppercase">{i18n.t("about.text.school")}</h4>
            <ul className="flex flex-col gap-4 max-sm:items-center">
              <li className="flex gap-3 items-center text-xs font-medium uppercase">
                {" "}
                <span>
                  <MdArrowRight className="text-lg opacity-25" />
                </span>{" "}
                <span>Escola da Nuvem - {i18n.t("about.text.three")} 16/06/2024</span>
              </li>
              <li className="flex gap-3 items-center text-xs font-medium uppercase">
                {" "}
                <span>
                  <MdArrowRight className="text-lg opacity-25" />
                </span>{" "}
                <span>Hackers do Bem -  {i18n.t("about.text.three")} 02/02/2024</span>
              </li>
              <li className="flex gap-3 items-center text-xs font-medium uppercase">
                {" "}
                <span>
                  <MdArrowRight className="text-lg opacity-25" />
                </span>{" "}
                <span>ADS Anhanguera -  {i18n.t("about.text.three")} 01/07/2024</span>
              </li>
              <li className="flex gap-3 items-center text-xs font-medium uppercase">
                {" "}
                <span>
                  <MdArrowRight className="text-lg opacity-25" />
                </span>{" "}
                <span> {i18n.t("about.text.english")}</span>
              </li>
            </ul>
          </div>
          <div className="w-full max-xl:hidden flex items-center justify-center">
            <span className="w-14 h-14 max-sm:w-8 max-sm:h-8 rotate-45 border-[1px] border-[var(--color-text-primary)] opacity-50"></span>
          </div>
          <div className="w-full min-h-full">
            <h4 className="text-xl mr-2 mb-5 text-end max-sm:text-center uppercase">{i18n.t("about.text.experiece")}</h4>
            <ul className="flex flex-col gap-4 justify-end items-end max-sm:items-center">
              <li className="flex gap-3 items-center text-xs font-medium uppercase max-sm:flex-row-reverse">
                {" "}
                <span>{i18n.t("about.text.studies")}  - {i18n.t("about.text.three")} 19/01/2023</span>
                <span>
                  <MdArrowLeft className="text-lg opacity-25 max-sm:rotate-180" />
                </span>{" "}
              </li>
              <li className="flex gap-3 items-center text-xs font-medium uppercase max-sm:flex-row-reverse">
                {" "}
                <span>FREELANCES - {i18n.t("about.text.three")}  20/06/2024</span>
                <span>
                  <MdArrowLeft className="text-lg opacity-25 max-sm:rotate-180" />
                </span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
