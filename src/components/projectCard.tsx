import React from "react";
import Divider from "./divider";
import Button from "./button";

type Props = {
  wordmark: React.ReactNode;
  headline: string;
  headingOne: string;
  paragraphOne: string | React.ReactNode;
  headingTwo: string;
  paragraphTwo: string | React.ReactNode;
  internalLink: string;
  children: React.ReactNode | React.ReactNode[];
};

const ProjectCard = ({
  wordmark,
  headline,
  headingOne,
  paragraphOne,
  headingTwo,
  paragraphTwo,
  internalLink,
  children,
}: Props) => {
  return (
    <div className="w-full relative flex flex-col justify-start items-start mt-4 md:mt-8">
      <div className="card lg:start-[-35px] h-[90px] p-1 rounded-full absolute z-10">
        <div className="inset-card rounded-full size-full flex flex-col justify-center p-8 overflow-hidden max-w-[400px]">
          {wordmark}
        </div>
      </div>
      <div className="card w-full px-5 mt-[45px] py-[75px]">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
          <div className="gap-2 w-full flex mx-auto flex-col">
            <p className="font-mono tracking-wider font-bold text-center md:text-start uppercase text-xl md:text-4xl emboss">
              {headline}
            </p>
            <Divider className="my-5" />
            <h2 className="font-exa font-light text-center tracking-tight align-bottom lg:text-start text-3xl">
              {headingOne}
            </h2>
            <p className="font-serif text-black/70 leading-snug text-base md:text-lg text-justify lg:text-start mb-1">
              {paragraphOne}
            </p>
            <h2 className="font-exa font-light text-center align-bottom lg:text-start text-3xl">
              {headingTwo}
            </h2>
            <p className="font-serif text-black/70 leading-snug text-base md:text-lg text-justify lg:text-start mb-4">
              {paragraphTwo}
            </p>
            <div className="flex flex-row gap-4">
              <Button href={internalLink}>Learn More</Button>
            </div>
          </div>
          <div className="gap-2 w-full flex mx-auto flex-col">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
