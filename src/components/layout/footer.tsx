import React from "react";
import ContentContainer from "./contentContainer";
import Link from "next/link";
import {
  EXTERNAL_LINK,
  INTERNAL_LINK,
  PROJECT_LINK,
  WORK_LINK,
} from "@/constants/links";

type Props = {};

const Footer = (props: Props) => {
  const linkStyles =
    "font-exa font-extralight text-base md:text-lg text-black/70 tracking-wide animated-underline";
  const linkHeaderStyles =
    "font-exa font-light text-base md:text-lg text-black tracking-wide animated-underline";
  const columnStyles = "flex flex-col gap-4";
  return (
    <div className="w-full footer py-10">
      <ContentContainer>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4 justify-between">
            <Link
              href={INTERNAL_LINK.HOME}
              className="font-exa text-base md:text-lg"
            >
              <img
                src="/assets/jbsvg.svg"
                alt="JB"
                className="w-[120px] fill-black/70 mr-2"
              />
            </Link>
            <p className="font-mono font-light text-sm text-black/70">
              Created by <br />
              Jayden Boesch
            </p>
          </div>
          <div className={columnStyles}>
            <Link href={INTERNAL_LINK.ABOUT} className={linkHeaderStyles}>
              Social
            </Link>
            <div className="w-full h-[1px] bg-gradient-to-r from-black/20 to-black/5" />
            <Link href={EXTERNAL_LINK.TWITTER} className={linkStyles}>
              Twitter
            </Link>
            <Link href={EXTERNAL_LINK.GITHUB} className={linkStyles}>
              Github
            </Link>
            <Link href={EXTERNAL_LINK.LINKEDIN} className={linkStyles}>
              LinkedIn
            </Link>
          </div>
          <div className={columnStyles}>
            <Link href={INTERNAL_LINK.WORK} className={linkHeaderStyles}>
              Work
            </Link>
            <div className="w-full h-[1px] bg-gradient-to-r from-black/20 to-black/5" />
            <Link
              href={INTERNAL_LINK.WORK + WORK_LINK.ENSEMBLE}
              className={linkStyles}
            >
              Ensemble
            </Link>
            <Link
              href={INTERNAL_LINK.WORK + WORK_LINK.TAPP}
              className={linkStyles}
            >
              Tapp Sports
            </Link>
          </div>
          <div className={columnStyles}>
            <Link href={INTERNAL_LINK.PROJECTS} className={linkHeaderStyles}>
              Projects
            </Link>
            <div className="w-full h-[1px] bg-gradient-to-r from-black/20 to-black/5" />
            <Link
              href={INTERNAL_LINK.PROJECTS + PROJECT_LINK.KNOWLEDGE_GRAPH}
              className={linkStyles}
            >
              AI Knowledge Graph
            </Link>
            <Link
              href={INTERNAL_LINK.PROJECTS + PROJECT_LINK.HASHMARK}
              className={linkStyles}
            >
              Hashmark
            </Link>
            <Link
              href={INTERNAL_LINK.PROJECTS + PROJECT_LINK.JSYNTH}
              className={linkStyles}
            >
              JSynth
            </Link>
            <Link
              href={INTERNAL_LINK.PROJECTS + PROJECT_LINK.DANCE_MARATHON}
              className={linkStyles}
            >
              Dance Marathon
            </Link>
            <Link
              href={INTERNAL_LINK.PROJECTS + PROJECT_LINK.PIKE_WEBSITE}
              className={linkStyles}
            >
              PIKE Website
            </Link>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default Footer;
