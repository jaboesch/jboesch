import clsx from "clsx";
import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  noSafeAreaY?: boolean;
};

const ContentContainer = ({ children, noSafeAreaY }: Props) => {
  return (
    <div className={clsx("max-w-[1000px] w-full mx-auto px-6", !noSafeAreaY && "py-10")}>{children}</div>
  );
};

export default ContentContainer;
