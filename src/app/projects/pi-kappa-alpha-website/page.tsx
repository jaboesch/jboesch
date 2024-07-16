import Divider from "@/components/divider";
import ArticleContainer from "@/components/layout/articleContainer";
import { PROJECT_DESCRIPTIONS } from "@/constants/descriptions";
import Image from "next/image";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <ArticleContainer>
      <div className="flex flex-col gap-4 md:gap-3 w-full">
        <img
          className="w-full pr-2 my-5 opacity-90"
          src="/assets/pike/wordmark-1.png"
          alt="Pike"
        />
        <Divider className="my-5" />
        <h1>What is this project?</h1>
        <p>{PROJECT_DESCRIPTIONS.pike.summary}</p>
        <br />
        <h1>What was my involvement?</h1>
        <p>
          During my time as the Technology Chairman for the Pi Kappa Alpha
          fraternity, I set a goal to completely rebuild the fraternity&apos;s
          public website. This involved updating the outdated style and content
          to a more modern and attractive design to support our recruitment
          efforts. The project required me to rebuild the site using HTML, CSS,
          and JavaScript, and also to modify an existing .NET application that
          was integral to the site&apos;s functionality. This initiative
          significantly boosted our fraternity&apos;s digital presence, leading
          to a 50% increase in web interactions, which we proudly promoted
          across social media platforms.
        </p>
        <br />
        <h1>Gallery</h1>
        <Divider className="my-5" />
        <div className="gap-3 w-full flex mx-auto flex-col">
          <Image
            alt="Landing page"
            src="/assets/pike/landing.png"
            className="object-scale-down mt-2 w-full rounded-xl brightness-[99%] hover:brightness-100 transition duration-300"
            width={1600}
            height={900}
          />
          <span className="caption">Landing Page</span>
          <Image
            alt="Info Section"
            src="/assets/pike/feature.png"
            className=" w-full rounded-xl mt-2 brightness-[99%] hover:brightness-100 transition duration-300"
            width={1600}
            height={900}
          />
          <span className="caption">Informational Section with Preamble</span>
          <br />
        </div>
      </div>
    </ArticleContainer>
  );
};

export default Page;
