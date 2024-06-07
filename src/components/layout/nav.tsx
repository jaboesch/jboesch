import React from "react";
import ContentContainer from "./contentContainer";
import Link from "next/link";
import clsx from "clsx";

type Props = {};

const Nav = (props: Props) => {
  const linkStyles =
    "font-exa font-extralight text-base md:text-lg text-black/70 tracking-wide cursor-pointer";
  return (
    <div className="mx-auto mt-[30px] md:mt-[60px] px-2 md:px-10 card rounded-full">
      <ContentContainer noSafeAreaY>
        <div className="h-[60px] sm:h-[75px] items-center justify-center mx-auto w-full flex flex-row gap-4 sm:gap-5 md:gap-7 lg:gap-10 ease-in-out transition">
          <Link href="/" className={clsx(linkStyles)}>
            Work
          </Link>
          <Link href="/" className={clsx(linkStyles)}>
            Projects
          </Link>
          <div className="md:contents hidden">
            <Link href="/">
              <img
                src="/assets/jbsvg.svg"
                alt="JB"
                className="w-[50px] fill-black/70 mr-2"
              />
            </Link>
          </div>
          <Link href="/" className={clsx(linkStyles)}>
            Blog
          </Link>
          <Link href="/" className={clsx(linkStyles)}>
            About
          </Link>
        </div>
      </ContentContainer>
    </div>
  );
};

export default Nav;
