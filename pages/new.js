import Head from "next/head";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import SnippetForm from "../components/SnippetForm";

export default function New() {
  return (
    <div>
      <Head>
        <title>Create Next Snippet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-lg mx-auto">
        <h1 className="text-teal-600 text-2xl font-semibold mb-4">
          New Snippet
        </h1>
        <SnippetForm />
      </main>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
