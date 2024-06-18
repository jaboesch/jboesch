"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  content: string;
};

const CopyButton = ({ content }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const onClick = () => {
    navigator.clipboard.writeText(content);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <button
      className="flex w-full group flex-row gap-2 items-center justify-between mx-4 cursor-copy transition duration-100"
      onClick={onClick}
    >
      <motion.div
        key={isCopied ? "copied" : "not-copied"}
        initial={{ opacity: 0, translateY: 0 }}
        animate={{ opacity: 1, translateY: 1 }}
        exit={{ opacity: 0, translateY: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="truncate"
      >
        <span className="font-mono font-extralight text-lg">
          {isCopied ? "Copied" : content}
        </span>
      </motion.div>
      <Image
        src="/assets/icons/copy-regular.svg"
        className="opacity-20 group-hover:opacity-40 group-hover:scale-110 transition duration-500"
        height={15}
        width={15}
        alt=""
      />
    </button>
  );
};

export default CopyButton;
