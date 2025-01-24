import Divider from "@/components/divider";
import ArticleContainer from "@/components/layout/articleContainer";
import { PROJECT_DESCRIPTIONS } from "@/constants/descriptions";
import { EXTERNAL_LINK } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <ArticleContainer>
      <div className="flex flex-col gap-4 md:gap-3 w-full">
        <h2 className="font-exa text-center uppercase text-black/90 font-light text-5xl">
          JSynth
        </h2>
        <Divider className="my-5" />
        <h1>What is this project?</h1>
        <p>{PROJECT_DESCRIPTIONS.jsynth.summary}</p>
        <br />
        <br />
        <h1>Gallery</h1>
        <Divider className="my-5" />
        <div className="gap-3 w-full flex mx-auto flex-col">
          <Image
            alt="Active Synth"
            src="/assets/jsynth/synth-screenshot.png"
            className=" w-full rounded-xl mt-2 brightness-[99%] hover:brightness-100 transition duration-300"
            width={1600}
            height={900}
          />
          <span className="caption">Synth with active notes</span>
          <br />
          <Divider className="my-5" />
          <Link
            className="w-full my-10"
            href={EXTERNAL_LINK.JSYNTH}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="JSynth Website"
          >
            <div className="card w-full p-5 font-mono text-center tracking-wider font-bold uppercase text-3xl md:text-5xl emboss hover:text-white transition duration-500">
              Try it out at jsynth.art
            </div>
          </Link>
        </div>
      </div>
    </ArticleContainer>
  );
};

export default Page;
