import CopyButton from "@/components/copyButton";
import IconButton from "@/components/iconButton";
import ContentContainer from "@/components/layout/contentContainer";
import { ABOUT_DESCRIPTIONS, ABOUT_JSON } from "@/constants/descriptions";
import { EXTERNAL_LINK, INTERNAL_LINK } from "@/constants/links";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import React from "react";
import { theme } from "@/constants/codeBlockTheme";

type Props = {};

const Page = (props: Props) => {
  return (
    <ContentContainer>
      <div className="flex flex-col justify-center items-center gap-24">
        <div className="w-full max-w-[600px] gap-10 relative flex flex-col justify-start items-center mt-6 md:mt-12">
          <div className="card size-[250px] p-5 rounded-full absolute z-10 !bg-gradient-to-br from-blue-300 to-blue-700">
            <div className="inset-card rounded-full size-full p-2 !bg-gradient-to-br from-blue-100 to-blue-300">
              <img
                className="rounded-full size-full object-cover"
                src="/assets/portrait-color.jpg"
                alt="Portrait"
              />
            </div>
          </div>
          <div className="card w-full mt-[125px] pl-5 pr-5 pb-8 pt-[150px] flex flex-col gap-5 justify-center">
            <h2 className="font-exa text-center text-3xl">Jayden Boesch</h2>
            <p className="font-serif text-base md:text-lg mt-[-10px] text-justify mx-auto max-w-[500px]">
              NYC based Software Engineer
            </p>
            <div className="flex flex-row justify-center gap-5">
              <IconButton
                href={EXTERNAL_LINK.TWITTER}
                iconFilename="x-twitter.svg"
              />
              <IconButton
                href={EXTERNAL_LINK.GITHUB}
                iconFilename="github.svg"
              />
              <IconButton
                href={EXTERNAL_LINK.LINKEDIN}
                iconFilename="linkedin.svg"
              />
            </div>
            <div className="rounded-2xl inset-card w-full flex flex-row items-center max-w-[350px] mx-auto">
              <IconButton
                href={EXTERNAL_LINK.EMAIL}
                iconFilename="envelope-regular.svg"
              />
              <CopyButton content="me@jboesch.com" />
            </div>
            <div className="rounded-2xl inset-card w-full flex flex-row items-center max-w-[350px] mx-auto">
              <IconButton
                href={EXTERNAL_LINK.ETHEREUM}
                iconFilename="ethereum.svg"
              />
              <CopyButton content="jglitch.eth" />
            </div>
          </div>
        </div>
        <div className="card max-w-[800px] w-full p-8 md:p-10 flex flex-col gap-3 justify-center">
          <h2 className="font-exa text-center lg:text-start text-3xl">
            About Me
          </h2>
          <p className="font-serif text-base md:text-lg text-justify lg:text-start">
            {ABOUT_DESCRIPTIONS.summary}
          </p>
        </div>
        <div className="card max-w-[800px] w-full px-0 pt-5 md:p-10 flex flex-col gap-3 justify-center">
          <h2 className="font-exa text-center lg:text-start text-3xl mb-2">
            Education
          </h2>
          <div className="inset-card p-3 md:p-5 md:rounded-xl overflow-hidden w-full max-w-[800px]">
            <div className="font-mono text-black/90 text-base tracking-tight leading-snug">
              <span className="text-blue-700 font-medium">
                me@jboesch.com &gt;&nbsp;
              </span>
              cat transcript.json
              <br />
              <SyntaxHighlighter
                language="json"
                style={theme}
                codeTagProps={{
                  className: "font-mono text-base tracking-tight leading-snug",
                }}
              >
                {JSON.stringify(ABOUT_JSON, null, 2)}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
        {/* <div className="inset-card max-w-[800px] w-full p-8 md:p-10 flex flex-col gap-3 justify-center">
          <h2 className="font-exa text-center lg:text-start text-3xl">
            Personal Statement
          </h2>
          <p className="font-serif text-base md:text-lg text-justify lg:text-start">
            {ABOUT_DESCRIPTIONS.summary}
          </p>
        </div> */}
      </div>
    </ContentContainer>
  );
};

export default Page;
