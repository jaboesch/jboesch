import React from "react";
import ContentContainer from "./contentContainer";
import Link from "next/link";
import clsx from "clsx";

type Props = {};

const Footer = (props: Props) => {
  const linkStyles =
    "font-exa font-extralight text-base md:text-lg max-w-full truncate text-black/70 hover:underline tracking-wide cursor-pointer truncate w-min";
  const linkHeaderStyles =
    "font-exa font-light text-base md:text-lg text-black tracking-wide hover:underline cursor-pointer truncate w-min";
  const columnStyles = "flex flex-col gap-4";
  return (
    <div className="w-full footer py-10">
      <ContentContainer>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4 justify-between">
            <Link href="/" className="font-exa text-base md:text-lg">
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
            <Link href="/" className={linkHeaderStyles}>
              Social
            </Link>
            <div className="w-full h-[1px] bg-gradient-to-r from-black/20 to-black/5" />
            <Link href="/" className={linkStyles}>
              Twitter
            </Link>
            <Link href="/" className={linkStyles}>
              Github
            </Link>
            <Link href="/" className={linkStyles}>
              LinkedIn
            </Link>
          </div>
          <div className={columnStyles}>
            <Link href="/" className={linkHeaderStyles}>
              Work
            </Link>
            <div className="w-full h-[1px] bg-gradient-to-r from-black/20 to-black/5" />
            <Link href="/" className={linkStyles}>
              Ensemble
            </Link>
            <Link href="/" className={linkStyles}>
              Sketchbook
            </Link>
            <Link href="/" className={linkStyles}>
              Tapp Sports
            </Link>
          </div>
          <div className={columnStyles}>
            <Link href="/" className={linkHeaderStyles}>
              Projects
            </Link>
            <div className="w-full h-[1px] bg-gradient-to-r from-black/20 to-black/5" />
            <Link href="/" className={linkStyles}>
              JSynth
            </Link>
            <Link href="/" className={linkStyles}>
              Generative Duels
            </Link>
            <Link href="/" className={linkStyles}>
              Web3 Blog
            </Link>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default Footer;
