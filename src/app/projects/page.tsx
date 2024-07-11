"use client";

import ContentContainer from "@/components/layout/contentContainer";
import LedGrid from "@/components/ledGrid";
import ProjectCard from "@/components/projectCard";
import { PROJECT_DESCRIPTIONS } from "@/constants/descriptions";
import { EXTERNAL_LINK, INTERNAL_LINK, PROJECT_LINK } from "@/constants/links";
import Image from "next/image";

const Page = () => {
  return (
    <ContentContainer>
      <div className="flex flex-col w-full justify-center items-center gap-12 mb-[100px]">
        <div className="max-w-[700px] mx-auto w-full my-5 md:my-8">
          <LedGrid value={"PROJECTS"} gridStyle="grid-cols-8" delay={50} />
        </div>
        <ProjectCard
          wordmark={<h2 className="font-exa uppercase text-black/90 font-light text-3xl">JSynth</h2>}
          headline={PROJECT_DESCRIPTIONS.jsynth.headline}
          headingOne="Involvement"
          paragraphOne={PROJECT_DESCRIPTIONS.jsynth.involvement}
          headingTwo="Summary"
          paragraphTwo={PROJECT_DESCRIPTIONS.jsynth.summary}
          internalLink={INTERNAL_LINK.PROJECTS + PROJECT_LINK.JSYNTH}
        >
          <div className="gap-2 w-full flex mx-auto flex-col">
            <Image
              alt="Landing page"
              src="/assets/jsynth/at-rest.png"
              className="object-scale-down w-full rounded-xl border brightness-[99%] hover:brightness-100"
              width={1600}
              height={900}
            />
            <p className="font-mono text-center text-sm font-extralight">
              Synth at rest
            </p>
            <div className="hidden md:contents">
              <Image
                alt="Landing page"
                src="/assets/jsynth/synth-screenshot.png"
                className="object-scale-down w-full rounded-xl mt-4 border brightness-[99%] hover:brightness-100"
                width={1600}
                height={900}
              />
              <p className="font-mono text-center text-sm font-extralight">
                Synth with active notes
              </p>
            </div>
          </div>
        </ProjectCard>
      </div>
    </ContentContainer>
  );
};

export default Page;
