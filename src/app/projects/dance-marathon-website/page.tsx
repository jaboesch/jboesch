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
          className="w-full pr-2 opacity-90"
          src="/assets/dance-marathon/wordmark.png"
          alt="UNDM"
        />
        <Divider className="my-5" />
        <h1>What is this project?</h1>
        <p>{PROJECT_DESCRIPTIONS.danceMarathon.summary}</p>
        <br />
        <h1>What was my involvement?</h1>
        <p>
          I volunteered alongside a team of four other students to design and
          build a new website for the organization. My specific contributions
          focused on developing the Corporate Sponsorship and Blog pages,
          utilizing Ruby on Rails and SCSS to create an attractive and engaging
          user experience. I was also responsible for dev ops tasks, such as
          automated deployments, and conducted code reviews to maintain
          high-quality standards. This project was a rewarding opportunity to
          apply my technical skills to support a valuable cause.
        </p>
        <br />
        <h1>Gallery</h1>
        <Divider className="my-5" />
        <div className="gap-3 w-full flex mx-auto flex-col">
          <Image
            alt="Countdown"
            src="/assets/dance-marathon/countdown.png"
            className="object-scale-down mt-2 w-full rounded-xl brightness-[99%] hover:brightness-100 transition duration-300"
            width={1600}
            height={900}
          />
          <span className="caption">Live countdown for fundraiser</span>
          <Image
            alt="Sponsorship"
            src="/assets/dance-marathon/sponsorship.png"
            className=" w-full rounded-xl mt-2 brightness-[99%] hover:brightness-100 transition duration-300"
            width={1600}
            height={900}
          />
          <span className="caption">Sponsorship detail cards</span>
          <br />
        </div>
      </div>
    </ArticleContainer>
  );
};

export default Page;
