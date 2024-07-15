import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  headline: string;
  internalLink: string;
};

const MiniProjectCard = ({ children, headline, internalLink }: Props) => {
  return (
    <Link href={internalLink}>
      <div className="button p-1 rounded-3xl w-full group h-full">
        <div className="inset-card rounded-3xl size-full flex flex-col gap-2 justify-center  items-center md:items-start p-8 overflow-hidden ">
          {children}
          <p className="font-mono transition duration-500 group-hover:text-white/90 tracking-wider font-bold text-center md:text-start uppercase text-2xl md:text-3xl emboss">
            {headline}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MiniProjectCard;
