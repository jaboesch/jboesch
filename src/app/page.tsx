"use client";

import ContentContainer from "@/components/layout/contentContainer";
import LedGrid from "@/components/ledGrid";
import WideImageCard from "@/components/wideImageCard";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const text = "Jayden Boesch".split("");

  return (
    <ContentContainer>
      <div className="flex flex-col w-full justify-center items-center gap-5 mb-[100px]">
        <div className=" w-full my-5 md:my-24">
          <LedGrid value={"JaydenBoesch"} />
        </div>
        {/* <h1 className="font-extralight font-exa text-6xl mb-[30px] uppercase text-black/70 text-center">
          Overview
        </h1> */}
        {/* <div className="inset-card p-10 aspect-video w-full max-w-[1000px] rounded-3xl">
          <div className="crt-screen size-full">
            <div className="terminal-content">
              -- Terminal content goes here --
            </div>
          </div>
        </div> */}
        <div className="w-full gap-10 relative flex flex-col justify-start items-center lg:flex-row mt-6 md:mt-12">
          <div className="card size-[250px] p-5 rounded-full absolute z-10">
            <div className="inset-card rounded-full size-full p-2">
              <img
                className="rounded-full size-full object-cover"
                src="/assets/p3.jpg"
                alt="Portrait"
              />
            </div>
          </div>
          <div className="card w-full h-auto lg:h-[300px] lg:ml-[125px] mt-[125px] lg:mt-0 pl-5 pr-5 pb-5 pt-[150px] lg:pt-10 lg:pr-10 lg:pb-10 lg:pl-[150px] flex flex-col gap-3 justify-center">
            <h2 className="font-exa text-center lg:text-start text-3xl">
              Hello!
            </h2>
            <p className="font-serif text-base md:text-lg text-justify lg:text-start mb-1">
              My name is Jayden, and I create applications and art with
              software. I have worked as a technical co-founder at two startups,
              building the entire tech stack from the ground up. Beyond
              functional code, I also love blending creativity and technology to
              bring unique ideas to life through artistic code projects. Take a
              look around to learn more about my work!
            </p>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}
