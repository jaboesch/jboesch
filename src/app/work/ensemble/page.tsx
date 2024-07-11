import Divider from "@/components/divider";
import ArticleContainer from "@/components/layout/articleContainer";
import { WORK_DESCRIPTIONS } from "@/constants/descriptions";
import { EXTERNAL_LINK } from "@/constants/links";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <ArticleContainer>
        <div className="flex flex-col gap-4 md:gap-3 w-full">
          <img
            className="w-full max-w-[500px] my-5 mx-auto opacity-90"
            src="/assets/ensemble/wordmark.png"
            alt="Ensemble"
          />
          <div className="font-mono max-w-[500px] mx-auto text-center tracking-wider font-bold uppercase text-3xl md:text-4xl emboss">
            The platform for the creative process.
          </div>
          <Divider className="my-5" />
          <h1>What is Ensemble?</h1>
          <p>{WORK_DESCRIPTIONS.ensemble.summary}</p>
          <Image
            src="/assets/ensemble/game-assets.png"
            width={1600}
            height={800}
            alt="Game Artifacts"
            className="w-full border brightness-[99%] rounded-xl"
          />
          <span className="caption">
            Screenshot from Ensemble showcasing game artifacts
          </span>
          <br />
          <h1>What is my role?</h1>
          <p>
            Since January of 2023, I have been building Ensemble as a Technical
            Co-Founder. My work primarily involves software engineering and
            system design, and I have also played a key role in business growth
            and strategic planning.
          </p>
          <br />
          <h1>What have I accomplished?</h1>
          <p>
            I initially started working with Ensemble as a contract developer
            building a minimum viable product (MVP) to validate the initial
            business assumption: collectors are interested in buying
            behind-the-scenes artifacts. The MVP we built was a web marketplace
            with two main functions. First, the website featured an elegant blog
            interface for artists to write about their creative process and the
            resulting artifacts. Second, the website allowed artists to present
            and sell artifacts as NFTs on the Ethereum blockchain.
          </p>
          <p>
            This initial MVP launched successfully, bringing in enough
            validation and sales volume for Ensemble to raise a $1M pre-seed
            fundraising round. Shortly after, I joined Ensemble full-time as a
            Technical Co-Founder.{" "}
          </p>
          <p>
            Since I started this role, I have independently designed and built
            the entire tech stack from the ground up. The Ensemble website is
            now a fully functional digital art marketplace with a robust toolkit
            for artists to share/sell artifacts and a clean, minimalist
            presentation for collectors to explore/purchase artifacts.
          </p>
          <p>
            For the best presentation of what I have built, please explore the{" "}
            <Link href={EXTERNAL_LINK.ENSEMBLE} className="hyperlink">
              Ensemble website
            </Link>
            .
          </p>
          <br />
          <h1>What did I learn?</h1>
          <p>
            Throughout my career at Ensemble, I have learned a tremendous amount
            about how to design, iterate, and build a software product. Without
            an engineering team to rely on, I have learned to pick up new
            technologies quickly, architect scalable and flexible systems, and
            build features end-to-end across the technical stack. I have
            certainly made mistakes along the way and felt the pain of
            correcting a flawed architecture pattern or refactoring after a poor
            design choice, but these mistakes have taught me countless lessons
            and ultimately led to a cleaner and more stable codebase.{" "}
          </p>
          <p>
            Perhaps my biggest engineering lesson from Ensemble is building a
            system capable of handling uncertainty and volatility. As a startup
            in an evolving web3 ecosystem, our requirements and external
            dependencies are constantly changing. This volatility makes system
            design very challenging, and I am continuing to learn how to
            effectively develop software and architecture patterns to mitigate
            this.
          </p>
          <p>
            Here are a few examples of challenges I encountered and the
            solutions I built to overcome them:
          </p>
          <h3>Blockchain Data Storage</h3>
          <ul>
            <li>
              <strong>Problem:</strong> Data stored on the blockchain may be
              difficult, expensive, or simply impossible to access.
            </li>
            <li>
              <strong>My Solution:</strong> Blockchain data critical to
              Ensemble, such as artwork media, metadata, and sale data, is
              cached using a document database and CDN (Firebase and
              Cloudflare).
            </li>
          </ul>
          <h3>Smart Contract and Blockchain Upgrades</h3>
          <ul>
            <li>
              <strong>Problem:</strong> Smart contracts and blockchains are
              constantly changing and evolving to make transactions cheaper and
              faster (introduction of L2s).
            </li>
            <li>
              <strong>My Solution:</strong> Contract interfaces, addresses, and
              chain configurations are abstracted into a separate package for
              easier version management and reuse across multiple codebases.
            </li>
          </ul>
          <h3>Unreliable Tooling</h3>
          <ul>
            <li>
              <strong>Problem:</strong> Libraries and tools in web3 are also
              usually created by startups, so their offerings may be unreliable
              or frequently change without warning.
            </li>
            <li>
              <strong>My Solution:</strong> Third party dependencies are avoided
              if possible, otherwise failure-resistant architecture such as
              automatic retries and detailed error logging is implemented around
              dependencies.
            </li>
          </ul>
          <br />
          <h1>Gallery</h1>
          <Divider className="my-5" />
          <div className="gap-2 w-full flex mx-auto flex-col">
            <Image
              alt="Creative Process Article"
              src="/assets/ensemble/story.png"
              className="object-scale-down w-full rounded-xl border brightness-[99%]"
              width={1600}
              height={900}
            />
            <span className="caption">
              Artist Mitchell Chan writes about his creative process
            </span>

            <Image
              alt="Artifact Explore page"
              src="/assets/ensemble/artifact-explore-page.png"
              className="object-scale-down w-full rounded-xl mt-10 brightness-[99%]"
              width={1600}
              height={900}
            />
            <span className="caption">
              Sketches on the Ensemble Artifact Explore page{" "}
            </span>

            <Image
              alt="Artifact sale"
              src="/assets/ensemble/deafbeef.png"
              className="object-scale-down w-full rounded-xl mt-10 brightness-[99%]"
              width={1600}
              height={900}
            />
            <span className="caption">
              Artist 0xDEAFBEEF sells his <em>Canon in D</em> program
            </span>
          </div>
          <br />
          <Divider className="my-5" />
          <Link
            className="w-full my-10"
            href={EXTERNAL_LINK.ENSEMBLE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ensemble Website"
          >
            <div className="card w-full p-5 font-mono text-center tracking-wider font-bold uppercase text-3xl md:text-5xl emboss hover:text-white transition duration-500">
              Learn More at ensemble.art
            </div>
          </Link>
        </div>
      </ArticleContainer>
    </>
  );
};

export default Page;
