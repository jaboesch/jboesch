import clsx from "clsx";
import React from "react";

type Props = {
  className?: string;
};

const Divider = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        "w-full h-[1px] bg-gradient-to-r from-black/20 to-black/5",
        className
      )}
    />
  );
};

export default Divider;
