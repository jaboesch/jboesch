"use client";

import Divider from "@/components/divider";
import ContentContainer from "@/components/layout/contentContainer";
import LedGrid from "@/components/ledGrid";
import {
  ABOUT_DESCRIPTIONS,
  PROJECT_DESCRIPTIONS,
  WORK_DESCRIPTIONS,
} from "@/constants/descriptions";
import { INTERNAL_LINK, PROJECT_LINK, WORK_LINK } from "@/constants/links";
import Link from "next/link";

export default function Home() {
  return (
    <ContentContainer>
      <div className="flex flex-col w-full justify-center items-center gap-5 mb-[100px]">
        <div className=" w-full my-5 md:my-24">
          <LedGrid value={"JAYDENBOESCH"} gridStyle="grid-cols-6" delay={75} />
        </div>
        <div className="w-full gap-10 relative flex flex-col justify-start items-center lg:flex-row mt-6 md:mt-12">
          <div className="card size-[250px] p-5 rounded-full absolute z-10">
            <div className="inset-card rounded-full size-full p-2">
              <img
                className="rounded-full size-full object-cover"
                src="/assets/portrait-2.jpg"
                alt="Portrait"
              />
            </div>
          </div>
          <div className="card w-full h-auto lg:h-[300px] lg:ml-[125px] mt-[125px] lg:mt-0 pl-5 pr-5 pb-5 pt-[150px] lg:pt-10 lg:pr-10 lg:pb-10 lg:pl-[150px] flex flex-col gap-3 justify-center">
            <h2 className="font-exa text-center lg:text-start text-3xl">
              Hello!
            </h2>
            <p className="font-serif text-base md:text-lg text-justify lg:text-start mb-1">
              {ABOUT_DESCRIPTIONS.summary}
            </p>
          </div>
        </div>
        <div className="w-full relative flex flex-col justify-start items-center mt-10 md:mt-24">
          <div className="card md:w-full w-[80%] max-w-[600px] h-[70px] p-1 rounded-full absolute z-10">
            <div className="inset-card rounded-full size-full flex flex-col justify-center p-2">
              <h2 className="font-exa text-center tracking-tight text-2xl md:text-3xl">
                Current Work
              </h2>
            </div>
          </div>
          <div className="card w-full px-5 mt-[35px] py-[60px]">
            <div className="max-w-[600px] gap-2 w-full flex mx-auto flex-col justify-center">
              <p className="font-mono font-light text-base md:text-lg text-center">
                Here is what I am working on right now.
              </p>
              <Divider className="my-5" />
              <Link
                href={INTERNAL_LINK.WORK + WORK_LINK.ENSEMBLE}
                className="font-exa animated-underline text-center align-bottom lg:text-start text-3xl"
              >
                Ensemble
              </Link>
              <p className="font-serif text-base md:text-lg text-justify lg:text-start mb-1">
                {WORK_DESCRIPTIONS.ensemble.involvement}
              </p>
              <Divider className="my-5" />
              <h2 className="font-exa text-center align-bottom lg:text-start text-3xl"></h2>
              <Link
                href={INTERNAL_LINK.PROJECTS + PROJECT_LINK.JSYNTH}
                className="font-exa animated-underline text-center align-bottom lg:text-start text-3xl"
              >
                JSynth
              </Link>
              <p className="font-serif text-base md:text-lg text-justify lg:text-start mb-1">
                {PROJECT_DESCRIPTIONS.jsynth.involvement}
              </p>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}
