import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS Starter Template</title>
        <meta
          name="description"
          content="Starting point for building a NextJS app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to NextJS Starter Template</h1>
      </main>
    </div>
  );
};

export default Home;
