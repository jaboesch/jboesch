"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  iconFilename: string;
  href: string;
  inNewWindow?: boolean;
  className?: string;
};

const IconButton = ({
  iconFilename,
  className,
  inNewWindow,
  href,
}: ButtonProps) => {
  return (
    <Link
      href={href}
      target={inNewWindow ? "_blank" : "_self"}
      rel="noreferrer"
      className={clsx(
        "button p-[10px] text-center size-[50px] rounded-2xl shrink-0 flex justify-center items-center",
        className
      )}
    >
      <Image
        src={`/assets/icons/${iconFilename}`}
        alt="icon"
        className="max-w-[30px] max-h-[30px] opacity-90"
        width={25}
        height={25}
      />
    </Link>
  );
};

export default IconButton;
