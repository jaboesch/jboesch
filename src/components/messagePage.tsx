import React from "react";
import ContentContainer from "./layout/contentContainer";

type Props = {
  primaryMessage: string;
  secondaryMessage?: string;
};

const MessagePage = ({ primaryMessage, secondaryMessage }: Props) => {
  return (
    <ContentContainer>
      <div className="flex flex-col min-h-[70vh] gap-2 justify-center items-center">
        <h1 className="text-5xl uppercase tracking-tight emboss md:text-7xl font-bold font-exa max-w-[500px] mx-auto text-center">
          {primaryMessage}
        </h1>
        <p className="font-mono font-extralight max-w-[500px] mx-auto text-center">
          {secondaryMessage}
        </p>
      </div>
    </ContentContainer>
  );
};

export default MessagePage;
