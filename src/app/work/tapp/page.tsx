import Divider from "@/components/divider";
import ArticleContainer from "@/components/layout/articleContainer";
import { WORK_DESCRIPTIONS } from "@/constants/descriptions";
import { EXTERNAL_LINK } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  const headingStyle =
    "font-exa tracking-tight font-light align-bottom text-xl md:text-3xl";
  const paragraphStyle =
    "font-serif text-black/70 leading-snug text-base md:text-lg";

  return (
    <ArticleContainer>
      <div className="flex flex-col gap-2 w-full">
        <img
          className="w-full max-w-[150px] md:max-w-[250px] mx-auto opacity-90"
          src="/assets/tapp/wordmark.png"
          alt="Tapp"
        />
        <div className="font-mono text-center tracking-wider font-bold uppercase text-xl md:text-3xl emboss">
          Track. Analyze. Predict. Perform.
        </div>
        <Divider className="my-5" />
        <h1>What is Tapp Sports?</h1>
        <p>{WORK_DESCRIPTIONS.tapp.summary}</p>
        <br />
        <h1>What was my role?</h1>
        <p>
          In January of 2020, I joined three friends to co-found Tapp Sports,
          where I served as the CTO. I led our technical team in developing a
          comprehensive sports tech platform, including a customizable web
          application, native iOS mobile app, robust API, and a powerful data
          processing engine. I also took on product management responsibilities,
          drafting UX designs, planning development sprints, and conducting user
          interviews.
        </p>
        <br />
        <h1>What did I accomplish?</h1>
        <p>
          Throughout my time at Tapp Sports, we worked with over 20 baseball
          teams, 500 athletes, and collected 100,000+ data points. I am proud to
          see how our work helped athletes quantify day-to-day performance,
          tracking their improvement over time. We also received gratitude from
          coaches who were able to spend less time managing data and more time
          coaching.
        </p>
        <blockquote>
          “Compared to last year, this app has saved my hundreds of hours
          staring at excel sheets and our players have become much more
          competitive during practice.”
        </blockquote>
        <span>
          - Danny Marcuzo, Assistant Coach for the Husker Baseball Team
        </span>
        <p>
          <strong>
            In 2023, after years of dedicated effort, Tapp Sports was acquired
            by Play'N Sports.
          </strong>
        </p>
        <p>
          Another significant accomplishment from my work at Tapp Sports is the
          lasting impact we made on the startup community in Lincoln, NE. We
          were introduced to the community after being accepted into a startup
          accelerator program called gBETA run by gener8tor, a nationally ranked
          venture capital firm. This program helped us connect with other
          Nebraska-based startup founders and form a new entrepreneurial program
          for students at the Raikes School called Startup Studio.
        </p>
        <p>
          At the time, my co-founders and I were students in the Raikes School,
          a highly selective honors college within the University of Nebraska -
          Lincoln. With a strong focus in computer science and business, the
          Raikes School offers students an opportunity to work with established
          software companies through a class called Design Studio. This program
          is excellent, but my team wanted to pursue our own startup, Tapp
          Sports, instead of working for an established company. After pitching
          our idea to the school administration team and board of directors, we
          worked together to form a new program called Startup Studio.
        </p>
        <p>
          This accomplishment was not only important for us, but it also paved
          the way for other student-led startups to pursue their ideas with the
          full support and mentorship of Raikes School faculty members and the
          Nebraska startup community. I also dedicated time to work with local
          high school students, using my experience from Tapp Sports to teach
          them how to build software products and work iteratively, including
          user feedback throughout the process.
        </p>
        <br />
        <h1>What did I learn?</h1>
        <p>
          Working on Tapp Sports and interfacing with our customers has taught
          me a lot about how to lead a software development team using agile
          methods, turning feedback into actionable development tasks. I learned
          to deal with failure after losing pitch competitions, receiving poor
          customer feedback, and having tough conversations with my team. I
          learned the importance of community, and how impactful good
          relationships can be while building a company. As the director of our
          accelerator program likes to say, “Great trees never grow alone.”
        </p>
        <p>
          Beyond the numerous life lessons, I learned a lot as a software
          engineer. I taught myself countless new technologies while building my
          first React web application, React Native mobile application, Node and
          Python based cloud functions, NoSQL database, CI/CD and QA pipelines,
          etc. I learned how to develop each layer of the tech stack one step at
          a time, steadily building and rebuilding towards a stable, functional
          product for our customers.
        </p>
        <br />
        <h1>Links & Press</h1>
        <Divider className="my-5" />
        <Link
          href={EXTERNAL_LINK.TAPP_PRESS_1}
          className="hyperlink"
        >
          KETV News: Tapp Sports - UNL students create app that tracks baseball
          stats
        </Link>
        <Link
          href={EXTERNAL_LINK.TAPP_PRESS_2}
          className="font-mono text-lg  animated-underline"
        >
          Select Lincoln News: Five Nebraska Startups Selected for gBETA Lincoln
        </Link>
        <Link href={EXTERNAL_LINK.TAPP_STARTUP_STUDIO}>
          UNL News: Students turn entrepreneurs at the Raikes School
        </Link>
        <Link
          href={EXTERNAL_LINK.TAPP}
          className="font-mono text-lg  animated-underline"
        >
          Tapp Website
        </Link>
        <br />
        <h1 className={headingStyle}>Gallery</h1>
        <Divider className="my-5" />
        <div className="gap-3 w-full flex mx-auto flex-col">
          <div className="flex flex-col mb-1 gap-0 md:flex-row justify-around md:gap-2 w-full">
            <div className="flex flex-col gap-3 items-center">
              <Image
                alt="Explore page"
                src="/assets/tapp/phone-session.png"
                className="object-scale-down w-full max-w-[250px] rounded-xl mt-4 brightness-[99%] hover:brightness-100 transition duration-300"
                width={900}
                height={1600}
              />
              <p className="font-mono text-center text-sm font-extralight">
                Data graphics generated by Tapp
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Image
                alt="Explore page"
                src="/assets/tapp/phone-summary.png"
                className="object-scale-down w-full max-w-[255px] rounded-xl mt-4 brightness-[99%] hover:brightness-100 transition duration-300"
                width={900}
                height={1600}
              />
              <p className="font-mono text-center text-sm font-extralight">
                Data graphics generated by Tapp
              </p>
            </div>
          </div>
          <Image
            alt="Landing page"
            src="/assets/tapp/tools-with-device.png"
            className="object-scale-down w-full rounded-xl border brightness-[99%] hover:brightness-100"
            width={1600}
            height={900}
          />
          <p className="font-mono text-center text-sm font-extralight">
            Tapp toolkit and device mockup
          </p>

          <Image
            alt="Explore page"
            src="/assets/tapp/data-graphics.png"
            className="object-scale-down w-full rounded-xl mt-4 brightness-[99%] hover:brightness-100 transition duration-300"
            width={1600}
            height={900}
          />
          <p className="font-mono text-center text-sm font-extralight">
            Data graphics generated by Tapp
          </p>
          <br />
        </div>
      </div>
    </ArticleContainer>
  );
};

export default Page;
