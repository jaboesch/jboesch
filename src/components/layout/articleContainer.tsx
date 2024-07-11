import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const ArticleContainer = ({ children }: Props) => {
  return <div className={"article-container my-6 md:my-12 max-w-[700px] w-full mx-auto px-6"}>{children}</div>;
};

export default ArticleContainer;
