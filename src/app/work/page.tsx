"use client";

import Button from "@/components/button";
import Divider from "@/components/divider";
import ContentContainer from "@/components/layout/contentContainer";
import LedGrid from "@/components/ledGrid";
import ProjectCard from "@/components/projectCard";
import { EXTERNAL_LINK, INTERNAL_LINK, WORK_LINK } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <ContentContainer>
      <div className="flex flex-col w-full justify-center items-center gap-5 mb-[100px]">
        <div className="max-w-[600px] mx-auto w-full my-5 md:my-12">
          <LedGrid value={"WORK"} gridStyle="grid-cols-4" delay={50} />
        </div>
        <div className="w-full relative flex flex-col justify-start items-start mt-4 md:mt-8">
          <div className="card lg:start-[-35px] h-[70px] p-1 rounded-full absolute z-10">
            <div className="inset-card rounded-full size-full flex flex-col justify-center p-8 max-w-[400px]">
              <img
                className="w-full"
                src="/assets/ensemble/wordmark.png"
                alt="Ensemble"
              />
            </div>
          </div>
          <div className="card w-full px-5 mt-[35px] py-[60px]">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
              <div className="gap-2 w-full flex mx-auto flex-col">
                <p className="font-mono tracking-wider font-bold text-center md:text-start uppercase text-xl md:text-4xl emboss">
                  The platform for the creative process.
                </p>
                <Divider className="my-5" />
                <h2 className="font-exa font-light text-center tracking-tight align-bottom lg:text-start text-3xl">
                  Involvement
                </h2>
                <p className="font-serif text-black/70 leading-snug text-base md:text-lg text-justify lg:text-start mb-1">
                  I have been working at Ensemble as a technical co-founder
                  since the summer of 2022. As the sole engineer, I have
                  architected and built the entire tech stack, including a cloud
                  function-based API, a robust blockchain cache interface, and a
                  beautiful web experience.
                </p>
                <h2 className="font-exa font-light text-center align-bottom lg:text-start text-3xl">
                  Summary
                </h2>
                <p className="font-serif text-black/70 leading-snug text-base md:text-lg text-justify lg:text-start mb-4">
                  On Ensemble, artists document and sell the behind-the-scenes
                  materials from their creative process. Our aim is to support
                  artists in creating high quality context around their work and
                  to unlock the value in the artifacts which come from it,
                  including sketches, drafts, and more.
                </p>
                <div className="mt-auto flex flex-row gap-4">
                  <Button href={INTERNAL_LINK.WORK + WORK_LINK.ENSEMBLE}>
                    Learn More
                  </Button>
                  <Button href={EXTERNAL_LINK.ENSEMBLE} inNewWindow>
                    Visit
                  </Button>
                </div>
              </div>
              <div className="gap-2 w-full flex mx-auto flex-col">
                <Image
                  alt="Home page"
                  src="/assets/ensemble/home-page.png"
                  className="object-scale-down w-full rounded-xl border"
                  width={1600}
                  height={900}
                />
                <p className="font-mono text-center text-sm font-extralight">
                  Screenshot of the landing page
                </p>
                <div className="hidden md:contents">
                  <Image
                    alt="Home page"
                    src="/assets/ensemble/artifact-explore-page.png"
                    className="object-scale-down w-full rounded-xl border mt-4"
                    width={1600}
                    height={900}
                  />
                  <p className="font-mono text-center text-sm font-extralight">
                    Screenshot of the explore page
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProjectCard
          wordmark={
            <img
                className="w-full"
                src="/assets/ensemble/wordmark.png"
                alt="Ensemble"
              />
          }
          headline="The platform for the creative process."
          headingOne="Involvement"
          paragraphOne="I have been working at Ensemble as a technical co-founder
                  since the summer of 2022. As the sole engineer, I have
                  architected and built the entire tech stack, including a cloud
                  function-based API, a robust blockchain cache interface, and a
                  beautiful web experience."
          headingTwo="Summary"
          paragraphTwo="On Ensemble, artists document and sell the behind-the-scenes
                  materials from their creative process. Our aim is to support
                  artists in creating high quality context around their work and
                  to unlock the value in the artifacts which come from it,
                  including sketches, drafts, and more."
          internalLink={INTERNAL_LINK.WORK + WORK_LINK.ENSEMBLE}
          externalLink={EXTERNAL_LINK.ENSEMBLE}
        >
          <div className="gap-2 w-full flex mx-auto flex-col">
            <Image
              alt="Home page"
              src="/assets/ensemble/home-page.png"
              className="object-scale-down w-full rounded-xl border"
              width={1600}
              height={900}
            />
            <p className="font-mono text-center text-sm font-extralight">
              Screenshot of the landing page
            </p>
            <div className="hidden md:contents">
              <Image
                alt="Home page"
                src="/assets/ensemble/artifact-explore-page.png"
                className="object-scale-down w-full rounded-xl border mt-4"
                width={1600}
                height={900}
              />
              <p className="font-mono text-center text-sm font-extralight">
                Screenshot of the explore page
              </p>
            </div>
          </div>
        </ProjectCard>

        <ProjectCard
          wordmark={
            <img
              alt="Sketchbook"
              src="/assets/sketchbook/wordmark.png"
              className="w-full max-w-[250px] mx-auto"
            />
          }
          headline="A Sketchbook for the digital age."
          headingOne="Involvement"
          paragraphOne="In the fall of 2023, I created a new Ensemble product called Sketchbook. The app features a mobile-first design, a custom NFC-based authentication schema, and an image processing engine."
          headingTwo="Summary"
          paragraphTwo="The Ensemble Sketchbook allows owners to easily digitize and mint their sketches. Sketchbooks are digitally enabled with token-bound NFC chips used to authenticate Sketchbook owners. Sketches are minted on BASE, an Ethereum L2, and can be viewed/collected on Ensemble."
          internalLink={INTERNAL_LINK.WORK + WORK_LINK.SKETCHBOOK}
          externalLink={EXTERNAL_LINK.SKETCHBOOK}
        >
          <Image
            alt="Home page"
            src="/assets/ensemble/home-page.png"
            className="object-scale-down w-full rounded-xl border"
            width={1600}
            height={900}
          />
          <p className="font-mono text-center text-sm font-extralight">
            Screenshot of the landing page
          </p>
        </ProjectCard>
      </div>
    </ContentContainer>
  );
};

export default Page;
