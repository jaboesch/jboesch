"use client";

import Button from "@/components/button";
import Divider from "@/components/divider";
import ContentContainer from "@/components/layout/contentContainer";
import LedGrid from "@/components/ledGrid";
import MiniProjectCard from "@/components/miniProjectCard";
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
            <p className="font-serif text-base md:text-lg text-justify lg:text-start">
              {ABOUT_DESCRIPTIONS.summary}
            </p>
            <Link
              href={INTERNAL_LINK.ABOUT}
              className="font-exa font-extralight text-base text-black/80 tracking-tighter animated-underline"
            >
              Learn more &gt;
            </Link>
          </div>
        </div>

        <h2 className="font-exa text-center mt-[50px] md:mt-[125px] tracking-tight text-2xl md:text-3xl">
          My Work
        </h2>
        <Divider className="my-5" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          <MiniProjectCard
            headline={WORK_DESCRIPTIONS.ensemble.headline}
            internalLink={INTERNAL_LINK.WORK + WORK_LINK.ENSEMBLE}
          >
            <img
              className="max-w-[350px] mb-1 w-full opacity-90"
              src="/assets/ensemble/wordmark.png"
              alt="Ensemble"
            />
          </MiniProjectCard>
          <MiniProjectCard
            headline={WORK_DESCRIPTIONS.tapp.headline}
            internalLink={INTERNAL_LINK.WORK + WORK_LINK.TAPP}
          >
            <img
              className="w-full max-w-[150px] opacity-90"
              src="/assets/tapp/wordmark.png"
              alt="Tapp"
            />
          </MiniProjectCard>
          <MiniProjectCard
            headline={PROJECT_DESCRIPTIONS.jsynth.headline}
            internalLink={INTERNAL_LINK.PROJECTS + PROJECT_LINK.JSYNTH}
          >
            <h2 className="font-exa uppercase text-black/90 font-medium text-3xl">
              JSynth
            </h2>
          </MiniProjectCard>
        </div>
      </div>
    </ContentContainer>
  );
}
