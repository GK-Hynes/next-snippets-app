import React from "react";
import Head from "next/head";
import useSWR from "swr";
import Header from "../components/Header";
import Snippet from "../components/Snippet";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function MySnippets() {
  const { data: snippets } = useSWR("/api/mySnippets");
  return (
    <div>
      <Head>
        <title>Next Snippets App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="my-12">
          <Header title="My Snippets" />
        </div>
        {snippets !== undefined &&
          snippets.map((snippet) => (
            <Snippet key={snippet.id} snippet={snippet} />
          ))}
      </main>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
