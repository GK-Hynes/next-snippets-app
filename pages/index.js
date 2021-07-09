import Head from "next/head";
import Header from "../components/Header";
import Snippet from "../components/Snippet";
import useSWR from "swr";
export default function Home() {
  const { data: snippets, mutate } = useSWR("/api/snippets");
  return (
    <div>
      <Head>
        <title>Next Snippets App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="my-12">
          <Header
            title="Code Snippets"
            subtitle="Create and browse snippets you use every day in Web Development."
          />
        </div>
        {snippets !== undefined &&
          snippets.map((snippet) => (
            <Snippet
              key={snippet.id}
              snippet={snippet}
              snippetDeleted={mutate}
            />
          ))}
      </main>
    </div>
  );
}
