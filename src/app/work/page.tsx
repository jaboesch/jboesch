"use client";

import ContentContainer from "@/components/layout/contentContainer";
import LedGrid from "@/components/ledGrid";
import ProjectCard from "@/components/projectCard";
import { WORK_DESCRIPTIONS } from "@/constants/descriptions";
import { EXTERNAL_LINK, INTERNAL_LINK, WORK_LINK } from "@/constants/links";
import Image from "next/image";

const Page = () => {
  return (
    <ContentContainer>
      <div className="flex flex-col w-full justify-center items-center gap-12 mb-[100px]">
        <div className="max-w-[400px] mx-auto w-full my-5 md:my-8">
          <LedGrid value={"WORK"} gridStyle="grid-cols-4" delay={50} />
        </div>
        <ProjectCard
          wordmark={
            <img
              className="w-full opacity-90"
              src="/assets/ensemble/wordmark.png"
              alt="Ensemble"
            />
          }
          headline={WORK_DESCRIPTIONS.ensemble.headline}
          headingOne="Involvement"
          paragraphOne={
            <>
              <span className="font-bold">
                - {WORK_DESCRIPTIONS.ensemble.role}&nbsp;&nbsp;
              </span>
              <span className="font-extralight tracking-wider">
                ({WORK_DESCRIPTIONS.ensemble.date})
              </span>
              <br />
              <span>- {WORK_DESCRIPTIONS.ensemble.involvementSummary}</span>
            </>
          }
          headingTwo="Summary"
          paragraphTwo={WORK_DESCRIPTIONS.ensemble.summary}
          internalLink={INTERNAL_LINK.WORK + WORK_LINK.ENSEMBLE}
          externalLink={EXTERNAL_LINK.ENSEMBLE}
        >
          <div className="gap-2 w-full flex mx-auto flex-col">
            <Image
              alt="Landing page"
              src="/assets/ensemble/home-page.png"
              className="object-scale-down w-full rounded-xl border brightness-[99%] hover:brightness-100"
              width={1600}
              height={900}
            />
            <p className="font-mono text-center text-sm font-extralight">
              Screenshot of the landing page
            </p>
            <div className="hidden md:contents">
              <Image
                alt="Explore page"
                src="/assets/ensemble/artifact-explore-page.png"
                className="object-scale-down w-full rounded-xl border mt-4 brightness-[99%] hover:brightness-100 transition duration-300"
                width={1600}
                height={900}
              />
              <p className="font-mono text-center text-sm font-extralight">
                Screenshot of the explore page
              </p>
            </div>
          </div>
        </ProjectCard>

        {/* <ProjectCard
          wordmark={
            <img
              alt="Sketchbook"
              src="/assets/sketchbook/wordmark.png"
              className="w-full max-w-[250px] mx-auto opacity-90"
            />
          }
          headline={WORK_DESCRIPTIONS.sketchbook.headline}
          headingOne="Involvement"
          paragraphOne={WORK_DESCRIPTIONS.sketchbook.involvement}
          headingTwo="Summary"
          paragraphTwo={WORK_DESCRIPTIONS.sketchbook.summary}
          internalLink={INTERNAL_LINK.WORK + WORK_LINK.SKETCHBOOK}
          externalLink={EXTERNAL_LINK.SKETCHBOOK}
        >
          <div className="gap-2 w-full flex mx-auto flex-col">
            <div className="contents md:hidden">
              <Image
                alt="Product image"
                src="/assets/sketchbook/sketchbook-cover.png"
                className="object-scale-down w-full rounded-xl border"
                width={1600}
                height={900}
              />
              <p className="font-mono text-center text-sm font-extralight">
                Photo of a Sketchbook
              </p>
            </div>
            <div className="hidden md:grid grid-cols-2 w-full  gap-4">
              <Image
                alt="Create page"
                src="/assets/sketchbook/shot-1.png"
                className="object-scale-down w-full rounded-xl border mt-4 brightness-[99%] hover:brightness-100 transition duration-300"
                width={400}
                height={800}
              />
              <Image
                alt="Sale page"
                src="/assets/sketchbook/shot-3.png"
                className="object-scale-down w-full rounded-xl border mt-4 brightness-[99%] hover:brightness-100 transition duration-300"
                width={400}
                height={800}
              />
            </div>
            <p className="hidden md:inline-block font-mono text-center text-sm font-extralight">
              Screenshots from the Sketchbook app
            </p>
          </div>
        </ProjectCard> */}
        <ProjectCard
          wordmark={
            <img
              className="w-full max-w-[150px] mx-auto opacity-90"
              src="/assets/tapp/wordmark.png"
              alt="Tapp"
            />
          }
          headline={WORK_DESCRIPTIONS.tapp.headline}
          headingOne="Involvement"
          paragraphOne={WORK_DESCRIPTIONS.tapp.involvementSummary}
          headingTwo="Summary"
          paragraphTwo={WORK_DESCRIPTIONS.tapp.summary}
          internalLink={INTERNAL_LINK.WORK + WORK_LINK.TAPP}
        >
          <div className="gap-2 w-full flex mx-auto flex-col">
            <Image
              alt="Landing page"
              src="/assets/tapp/tools-with-device.png"
              className="object-scale-down w-full rounded-xl border brightness-[99%] hover:brightness-100"
              width={1600}
              height={900}
            />
            <p className="font-mono text-center text-sm font-extralight">
              Tapp toolkit and device mockup
            </p>
            <div className="hidden md:contents">
              <Image
                alt="Explore page"
                src="/assets/tapp/data-graphics.png"
                className="object-scale-down w-full rounded-xl mt-4 brightness-[99%] hover:brightness-100 transition duration-300"
                width={1600}
                height={900}
              />
              <p className="font-mono text-center text-sm font-extralight">
                Data graphics generated by Tapp
              </p>
            </div>
          </div>
        </ProjectCard>
      </div>
    </ContentContainer>
  );
};

export default Page;
