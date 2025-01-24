import Divider from "@/components/divider";
import ArticleContainer from "@/components/layout/articleContainer";
import { theme } from "@/constants/codeBlockTheme";
import { PROJECT_DESCRIPTIONS } from "@/constants/descriptions";
import { EXTERNAL_LINK } from "@/constants/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

type Props = {};

const Page = (props: Props) => {
  return (
    <ArticleContainer>
      <div className="flex flex-col gap-4 md:gap-3 w-full">
        <h1 className="font-exa text-center uppercase text-black/90 font-light text-5xl">
          LLM Knowledge Graph
        </h1>
        <span className="caption">
          This project is still in-progress, so stay tuned for more updates.
        </span>
        <Divider className="my-5" />
        <h2>What is this project?</h2>
        <p>{PROJECT_DESCRIPTIONS.knowledgeGraph.summary}</p>
        <Divider className="my-5" />
        <h2>Graph Builder</h2>
        <p>
          The Graph Builder component processes long-form text such as Wikipedia
          articles, and extracts key entities, relationships, and atomic facts
          to construct a knowledge graph. This graph is stored in a Neo4j
          database for efficient querying and visualization.
        </p>

        <h3>Technologies:</h3>
        <ul>
          <li>
            <strong>Large Language Model:</strong> Utilizes{" "}
            <span className="font-light font-mono">
              meta-llama/Llama-3.3-70B-Instruct
            </span>{" "}
            to generate XML-based responses for structured extraction of
            entities and relationships.
          </li>
          <li>
            <strong>Embeddings:</strong> Key entities are embedded using{" "}
            <span className="font-light font-mono">
              sentence-transformers/all-MiniLM-L6-v2
            </span>
            , enabling similarity-based retrieval for the graph reader agent.
          </li>
          <li>
            <strong>Python Libraries:</strong> Built with LangChain to
            facilitate AI interactions and manage chat history.
          </li>
          <li>
            <strong>Database:</strong> Neo4j stores all extracted nodes, edges,
            and relationships.
          </li>
          <li>
            <strong>Prompt Logging:</strong> Prompts and LLM outputs are
            versioned and timestamped for debugging and iterative improvement.
          </li>
        </ul>

        <h3>Sample Output:</h3>
        <Image
          alt="Large Graph Section"
          src="/assets/knowledge-graph/hp-full-graph.jpg"
          className="w-full rounded-xl mt-2 brightness-[99%] hover:brightness-100 transition duration-300"
          width={1600}
          height={900}
          quality={100}
        />
        <span className="caption">
          A large selection of key entities and relationships created from the
          {" "}<a
            href="https://en.wikipedia.org/wiki/Harry_Potter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline italic"
          >
            Harry Potter
          </a>{" "}
          article on Wikipedia.
        </span>
        <Image
          alt="Large Graph Section"
          src="/assets/knowledge-graph/hp-graph-segment-3.png"
          className="w-full rounded-xl mt-2 brightness-[99%] hover:brightness-100 transition duration-300"
          width={2000}
          height={2000}
        />
        <span className="caption">
          A small selection showing the graph hierarchy with selected facts from <em>Harry Potter and the Prisoner of Azkaban</em>.
        </span>
        <Divider className="my-5" />
        <h2>Graph Reader</h2>
        <p>
          The Graph Reader is a querying agent designed to form a rational plan,
          traverse the knowledge graph, and form answers to complex, multi-hop
          questions. By leveraging embeddings and graph-based reasoning, it
          creates responses that traditional RAG approaches struggle with.
        </p>

        <h3>Technologies:</h3>
        <ul>
          <li>
            <strong>Large Language Model:</strong> Utilizes{" "}
            <span className="font-light font-mono">openai/GPT-4o</span> with
            structured output and tool calling to power the graph reader agent.
          </li>
          <li>
            <strong>Python Libraries:</strong> Built with LangChain and
            LangGraph to manage agent state and action selection.
          </li>
          <li>
            <strong>Vector Search and Graph Traversal:</strong> Matches
            embeddings to find relevant entities and context. If the answer is
            not found, neighbor nodes are explored in Neo4j to form multi-hop
            responses.
          </li>
        </ul>

        <h3>Sample Output:</h3>
        <div className="inset-card p-3 md:p-5 rounded-md md:rounded-xl overflow-hidden w-full max-w-[800px]">
          <div className="font-mono text-black/90 text-base tracking-tight leading-snug">
            <SyntaxHighlighter
              language="markdown"
              theme={theme}
              codeTagProps={{
                className: "font-mono text-base tracking-tight leading-snug",
              }}
            >
              {`----- Initial -----
Question: A popular novel was compared by the Sunday Times to works by Roald Dahls. How many copies of this novel have been sold?

----- Step: 1 -----
Rational Plan: To answer the question about how many copies of the novel have been sold, we need to:
1. Identify the novel that was compared by the Sunday Times to works by Roald Dahl.
2. Find specific sales figures or estimates for this novel, which might be mentioned in the article.
3. Provide the number of copies sold based on the information available in the article.

----- Step: 2 -----
Check Atomic Facts Queue: ['the sunday times', 'roald dahl', 'book sales', '8.3 million copies', '10.8 million copies']
>>> returned atomic facts shown in graph screenshot.

----- Step: 3 -----
Read Chunk: ['d112ff4558f29fcb3077101f5ada5229']
>>> returned a chunk of text (identified by hash) from the original article related to the above facts.

----- Step: 4 -----
Next Action: Termination
Rational for Next Action: The current chunk provides the sales figures for Harry Potter and the Philosopher's Stone, which is the novel compared to Roald Dahl's works by the Sunday Times. Therefore, the information needed to answer the question is complete.

----- Step: 5 -----
Analysis: The notebook entry provides a direct answer to the question. It states that the novel Harry Potter and the Philosopher's Stone was compared by the Sunday Times to works by Roald Dahl and that it has sold 120 million copies. There is no conflicting information or need for further analysis as the notebook content is clear and directly answers the question.
Answer: The novel has sold 120 million copies.

----- Return -----
Answer: The novel has sold 120 million copies.`}
            </SyntaxHighlighter>
          </div>
        </div>
        <span className="caption">
          I cleaned up this output for readability; my logging is not nearly
          this easy to read yet!
        </span>
        <Image
          alt="Harry Potter graph segment"
          src="/assets/knowledge-graph/hp-graph-segment.jpg"
          className=" w-full rounded-xl mt-2 brightness-[99%] hover:brightness-100 transition duration-300"
          width={2400}
          height={1200}
        />
        <span className="caption">
          A small section of relevant nodes from the Harry Potter knowledge
          graph used to solve the above prompt.
        </span>
        <Divider className="my-5" />
        <h2>References & Further Reading</h2>
        <p>This project is heavily inspired by the following research:</p>
        <ul>
          <li className="font-light font-mono">
            <a
              href="https://arxiv.org/abs/2406.14550"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline italic"
            >
              GraphReader: Building Graph-based Agent to Enhance Long-Context
              Abilities of Large Language Models
            </a>{" "}
            by Li et al.
          </li>
          <li className="font-light font-mono">
            <a
              href="https://towardsdatascience.com/implementing-graphreader-with-neo4j-and-langgraph-e4c73826a8b7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline italic"
            >
              Implementing GraphReader with Neo4j and LangGraph
            </a>{" "}
            by Tomaz Bratanic
          </li>
        </ul>

        <Divider className="my-5" />

        <Link
          className="w-full my-10"
          href={EXTERNAL_LINK.KNOWLEDGE_GRAPH}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Knowledge Graph Github"
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
