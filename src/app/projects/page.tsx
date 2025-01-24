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
          wordmark={
            <h2 className="font-exa uppercase text-black/90 font-light text-center text-2xl">
              AI Knowledge Graph
            </h2>
          }
          headline={PROJECT_DESCRIPTIONS.knowledgeGraph.headline}
          headingOne="Involvement"
          paragraphOne={
            <>
              <span className="font-bold">
                - {PROJECT_DESCRIPTIONS.knowledgeGraph.role}&nbsp;&nbsp;
              </span>
              <span className="font-extralight tracking-wider">
                ({PROJECT_DESCRIPTIONS.knowledgeGraph.date})
              </span>
              <br />
              <span>- {PROJECT_DESCRIPTIONS.knowledgeGraph.involvementSummary}</span>
            </>
          }
          headingTwo="Summary"
          paragraphTwo={PROJECT_DESCRIPTIONS.knowledgeGraph.summary}
          internalLink={INTERNAL_LINK.PROJECTS + PROJECT_LINK.KNOWLEDGE_GRAPH}
        >
          <div className="gap-2 w-full flex mx-auto flex-col">
            <Image
              alt="Harry Potter Knowledge Graph"
              src="/assets/knowledge-graph/hp-full-graph.jpg"
              className="object-scale-down w-full rounded-xl border brightness-[99%] hover:brightness-100"
              width={1600}
              height={1600}
            />
            <p className="font-mono text-center text-sm font-extralight">
              Knowledge Graph generated from the Harry Potter Wikipedia article.
            </p>
          </div>
        </ProjectCard>

        <ProjectCard
          wordmark={
            <h2 className="font-exa uppercase text-black/90 font-light text-center text-3xl">
              Hashmark
            </h2>
          }
          headline={PROJECT_DESCRIPTIONS.hashmark.headline}
          headingOne="Involvement"
          paragraphOne={
            <>
              <span className="font-bold">
                - {PROJECT_DESCRIPTIONS.hashmark.role}&nbsp;&nbsp;
              </span>
              <span className="font-extralight tracking-wider">
                ({PROJECT_DESCRIPTIONS.hashmark.date})
              </span>
              <br />
              <span>- {PROJECT_DESCRIPTIONS.hashmark.involvementSummary}</span>
            </>
          }
          headingTwo="Summary"
          paragraphTwo={PROJECT_DESCRIPTIONS.hashmark.summary}
          internalLink={INTERNAL_LINK.PROJECTS + PROJECT_LINK.HASHMARK}
        >
          <div className="gap-2 w-full flex mx-auto flex-col">
            <Image
              alt="Hashmark Editor"
              src="/assets/hashmark/editor-portrait.png"
              className="object-scale-down w-full rounded-xl border brightness-[99%] hover:brightness-100"
              width={900}
              height={1600}
            />
            <p className="font-mono text-center text-sm font-extralight">
              Hashmark Interactive HTML Editor 
            </p>
          </div>
        </ProjectCard>

        <ProjectCard
          wordmark={
            <h2 className="font-exa uppercase text-black/90 font-light text-3xl">
              JSynth
            </h2>
          }
          headline={PROJECT_DESCRIPTIONS.jsynth.headline}
          headingOne="Involvement"
          paragraphOne={
            <>
              <span className="font-bold">
                - {PROJECT_DESCRIPTIONS.jsynth.role}&nbsp;&nbsp;
              </span>
              <span className="font-extralight tracking-wider">
                ({PROJECT_DESCRIPTIONS.jsynth.date})
              </span>
              <br />
              <span>- {PROJECT_DESCRIPTIONS.jsynth.involvementSummary}</span>
            </>
          }
          headingTwo="Summary"
          paragraphTwo={PROJECT_DESCRIPTIONS.jsynth.summary}
          internalLink={INTERNAL_LINK.PROJECTS + PROJECT_LINK.JSYNTH}
        >
          <div className="gap-2 w-full flex mx-auto flex-col">
            <Image
              alt="Resting Synth"
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
                alt="Active Synth"
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

        <ProjectCard
          wordmark={
            <img
              className="w-full max-w-[340px] mb-1 opacity-90"
              src="/assets/pike/wordmark-1.png"
              alt="Pike"
            />
          }
          headline={PROJECT_DESCRIPTIONS.pike.headline}
          headingOne="Involvement"
          paragraphOne={
            <>
              <span className="font-bold">
                - {PROJECT_DESCRIPTIONS.pike.role}&nbsp;&nbsp;
              </span>
              <span className="font-extralight tracking-wider">
                ({PROJECT_DESCRIPTIONS.pike.date})
              </span>
              <br />
              <span>- {PROJECT_DESCRIPTIONS.pike.involvementSummary}</span>
            </>
          }
          headingTwo="Summary"
          paragraphTwo={PROJECT_DESCRIPTIONS.pike.summary}
          internalLink={INTERNAL_LINK.PROJECTS + PROJECT_LINK.PIKE_WEBSITE}
        >
          <div className="gap-2 w-full flex mx-auto flex-col">
            <Image
              alt="Landing page"
              src="/assets/pike/landing.png"
              className="object-scale-down w-full border rounded-xl brightness-[99%] hover:brightness-100"
              width={1600}
              height={900}
            />
            <p className="font-mono text-center text-sm font-extralight">
              Landing Page
            </p>
            <div className="hidden md:contents">
              <Image
                alt="Info Section"
                src="/assets/pike/feature.png"
                className="object-scale-down border w-full rounded-xl mt-4 brightness-[99%] hover:brightness-100"
                width={1600}
                height={900}
              />
              <p className="font-mono text-center text-sm font-extralight">
                Informational Section with Preamble
              </p>
            </div>
          </div>
        </ProjectCard>

        <ProjectCard
          wordmark={
            <img
              className="w-full max-w-[200px] mb-1 opacity-90"
              src="/assets/dance-marathon/wordmark-short.png"
              alt="UNDM"
            />
          }
          headline={PROJECT_DESCRIPTIONS.danceMarathon.headline}
          headingOne="Involvement"
          paragraphOne={
            <>
              <span className="font-bold">
                - {PROJECT_DESCRIPTIONS.danceMarathon.role}&nbsp;&nbsp;
              </span>
              <span className="font-extralight tracking-wider">
                ({PROJECT_DESCRIPTIONS.danceMarathon.date})
              </span>
              <br />
              <span>
                - {PROJECT_DESCRIPTIONS.danceMarathon.involvementSummary}
              </span>
            </>
          }
          headingTwo="Summary"
          paragraphTwo={PROJECT_DESCRIPTIONS.danceMarathon.summary}
          internalLink={INTERNAL_LINK.PROJECTS + PROJECT_LINK.DANCE_MARATHON}
        >
          <div className="gap-2 w-full flex mx-auto flex-col">
            <Image
              alt="Countdown"
              src="/assets/dance-marathon/countdown.png"
              className="object-scale-down w-full border rounded-xl brightness-[99%] hover:brightness-100"
              width={1600}
              height={900}
            />
            <p className="font-mono text-center text-sm font-extralight">
              Live countdown for fundraiser
            </p>
            <div className="hidden md:contents">
              <Image
                alt="Sponsorship"
                src="/assets/dance-marathon/sponsorship.png"
                className="object-scale-down border w-full rounded-xl mt-4 brightness-[99%] hover:brightness-100"
                width={1600}
                height={900}
              />
              <p className="font-mono text-center text-sm font-extralight">
                Sponsorship detail cards
              </p>
            </div>
          </div>
        </ProjectCard>
      </div>
    </ContentContainer>
  );
};

export default Page;
