import Divider from "@/components/divider";
import ArticleContainer from "@/components/layout/articleContainer";
import Image from "next/image";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import React from "react";
import { EXTERNAL_LINK } from "@/constants/links";

const Page = () => {
  return (
    <ArticleContainer>
      <div className="flex flex-col gap-4 md:gap-3 w-full">
        <h1 className="font-exa text-center uppercase text-black/90 font-light text-5xl">
          Hashmark
        </h1>
        <Divider className="my-5" />
        <h2>What is this project?</h2>
        <p>
          Hashmark is an open-source blogging platform designed with two unique
          constraints:
          <strong> it is completely free</strong> to use, and{" "}
          <strong>modular/customizable</strong> for seamless integration into
          any website. By using decentralized storage on Arweave, Hashmark
          allows users to host blog posts without paying hosting or storage
          fees, while developers maintain complete control over styling, themes,
          and presentation on their own domain.
        </p>
        <Divider className="my-5" />
        <h2>Technologies & Hosting</h2>
        <p>Hashmark is built with the following technologies:</p>
        <ul>
          <li>
            <strong>Frontend:</strong> React, TypeScript, Next.js, TailwindCSS
          </li>
          <li>
            <strong>Editor:</strong> ProseMirror and TipTap
          </li>
          <li>
            <strong>Storage:</strong> Decentralized hosting on Arweave
          </li>
          <li>
            <strong>Hosting:</strong> Vercel at{" "}
            <a
              href="https://hashmark.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              hashmark.xyz
            </a>
          </li>
        </ul>
        <Divider className="my-5" />
        <h2>Post Editor</h2>
        <p>
          The Hashmark rich-text editor is inspired by Notion, offering an
          intuitive writing experience that is highly usable for technical and
          non-technical users alike. Key features include:
        </p>
        <ul>
          <li>
            <strong>Markdown Commands:</strong> Quickly format text using
            commands like <code>**bold**</code> or <code># headings</code>.
          </li>
          <li>
            <strong>Slash Command Menu:</strong> Add blocks, images, links, and
            more with the slash command menu.
          </li>
          <li>
            <strong>Bubble Menu:</strong> Contextual formatting options that
            appear as you highlight text.
          </li>
          <li>
            <strong>Customizable Themes:</strong> Easily customize colors and
            styles using the built-in form.
          </li>
        </ul>
        <p>
          The editor is built with TipTap (powered by ProseMirror) to deliver a
          rich editing experience. Output HTML files are fully optimized for
          SEO, with:
        </p>
        <ul>
          <li>Optimized metadata for social sharing and search engines</li>
          <li>Semantically correct HTML tags</li>
          <li>Image alt tags</li>
        </ul>
        <Image
          alt="Hashmark Editor"
          src="/assets/hashmark/editor.png"
          className="w-full rounded-xl border  mt-2 brightness-[99%] hover:brightness-100 transition duration-300"
          width={1600}
          height={900}
        />
        <span className="caption">The Hashmark editor interface.</span>
        <Image
          alt="Hashmark Editor Slash Commands"
          src="/assets/hashmark/slash-commands.png"
          className="w-full rounded-xl border  mt-2 brightness-[99%] hover:brightness-100 transition duration-300"
          width={1600}
          height={900}
        />
        <span className="caption">The slash command menu.</span>

        <Divider className="my-5" />
        <h2>Post Viewer</h2>
        <p>
          Hashmark makes it easy to load blog posts directly into your own
          website. Here’s how:
        </p>
        <ol>
          <li>
            1. Query the Arweave storage network using the wallet address used
            to sign and upload the blog post.
          </li>
          <li>2. Fetch the raw HTML from Arweave.</li>
          <li>
            3. Sanitize the HTML for security and wrap it in a custom{" "}
            <code>&lt;style&gt;</code> tag to match your website’s theme.
          </li>
        </ol>
        <p>
          A complete implementation example using Next.js is available in the
          GitHub repository. It demonstrates how to use static site
          optimization for fast loading speeds.
        </p>
        <p>Here is a truncated example:</p>

        <div className="inset-card p-3 md:p-5 rounded-md md:rounded-xl overflow-hidden w-full max-w-[800px]">
          <div className="font-mono text-black/90 text-base tracking-tight leading-snug">
            <SyntaxHighlighter
              language="jsx"
              codeTagProps={{
                className: "font-mono text-base tracking-tight leading-snug",
              }}
            >
              {`const Page = async ({ params }: Props) => {
  /**
   * Fetch the blog post from Arweave. See src/lib/irys/index.ts for implementation details.
   */
  const blogPost = await getBlogPost({
    authorAddress: params.authorAddress,
    slug: params.slug,
  });
  /**
   * Sanitize and process the HTML content for display. See below for implementation details.
   */
  const processedResult = await processHtml(blogPost.resourceUrl);
  const { theme, style, content } = processedResult;

  return (
    <>
      <style id="hashmark-theme" dangerouslySetInnerHTML={{ __html: theme }} />
      <style id="hashmark-style" dangerouslySetInnerHTML={{ __html: style }} />
      <div
        id="hashmark-body"
        className="w-full"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </>
  );
};`}
            </SyntaxHighlighter>
          </div>
        </div>
        <span className="caption ">
          Sample page to fetch and render a blog post. See full implementation
          with Next.js and SEO optimizations{" "}
          <a
            className="underline"
            href="https://github.com/jaboesch/hashmark/blob/main/src/app/post/%5BauthorAddress%5D/%5Bslug%5D/page.tsx"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </span>
        <div className="inset-card p-3 md:p-5 rounded-md md:rounded-xl overflow-hidden w-full max-w-[800px]">
          <div className="font-mono text-black/90 text-base tracking-tight leading-snug">
            <SyntaxHighlighter
              language="js"
              codeTagProps={{
                className: "font-mono text-base tracking-tight leading-snug",
              }}
            >
              {`export async function processHtml(url: string) {
    // Fetch the HTML
    const response = await fetch(url);
    const htmlText = await response.text();

    // Parse the HTML
    const $ = cheerio.load(htmlText);

    // Remove script tags
    $("script").remove();

    // Retrieve specific style tags and the body content
    const unsafeTheme = $("#hashmark-theme").html() || "";
    const unsafeStyle = $("#hashmark-style").html() || "";
    const unsafeContent = $("#hashmark-body").html() || "";

    // Sanitize the HTML
    const theme = DOMPurify.sanitize(unsafeTheme);
    const style = DOMPurify.sanitize(unsafeStyle);
    const content = DOMPurify.sanitize(unsafeContent, {
      ADD_ATTR: ["target", "rel"],
    });

    return {
      theme,
      style,
      content,
    };
}`}
            </SyntaxHighlighter>
          </div>
        </div>
        <span className="caption ">
          Sample function to sanitize and extract components from blog post
          HTML. See full implementation{" "}
          <a
            className="underline"
            href="https://github.com/jaboesch/hashmark/blob/main/src/app/actions/processHtml.ts"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </span>

        <Image
          alt="Hashmark Output"
          src="/assets/hashmark/output.png"
          className="w-full rounded-xl mt-2 border brightness-[99%] hover:brightness-100 transition duration-300"
          width={1600}
          height={900}
          quality={100}
        />
        <span className="caption">
          Example output HTML page wrapped and styled within a custom Next.js
          site.
        </span>
        <Image
          alt="Ensemble Blog Screenshot"
          src="/assets/hashmark/ensemble-blog.png"
          className="w-full rounded-xl mt-2 brightness-[99%] hover:brightness-100 transition duration-300"
          width={1600}
          height={900}
          quality={100}
        />
        <span className="caption">
          Production example of Hashmark blog posts integrated on{" "}
          <a
            href="https://www.ensemble.art/blog/creating-pixelated-perfection-with-julia-minamata"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Ensemble
          </a>
          .
        </span>

        <Divider className="my-5" />
        <Link
          className="w-full my-10"
          href="https://github.com/jaboesch/hashmark"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hashmark Github"
        >
          <div className="card w-full p-5 font-mono text-center tracking-wider font-bold uppercase text-3xl md:text-5xl emboss hover:text-white transition duration-500">
            View the Code
          </div>
        </Link>
      </div>
    </ArticleContainer>
  );
};

export default Page;
