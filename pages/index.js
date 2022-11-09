import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/Layout";
import { posts } from "./../data/posts";
import { BiChevronRight, BiBrain } from "react-icons/bi";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Next.js + Tailwind</title>
        <meta name="description" content="Simple Next.js + Tailwind demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="py-12 md:py-24 bg-yellow-300">
          <div className="container mx-auto px-4">
            <div className="mb-4">
              <BiBrain size={72} />
            </div>
            <h1 className="text-gray-900 text-3xl md:text-4xl font-extrabold mb-4">
              Wonderful stories told by AI
            </h1>
            <p className="text-gray-700">
              If you're looking for stories about developers, you've come to the
              right place. Our website is packed with tales of developers
              overcoming challenges, finding success, and making a difference.
              Whether you're a developer yourself or just interested in the
              industry, we hope you enjoy reading these stories as much as we
              enjoyed writing them.
            </p>
            <p className="mt-4 text-gray-700">
              All content by GPT-3
            </p>
          </div>
        </section>
        <section className="py-1 md:py-12">
          <div className="container mx-auto px-4">
            {Object.keys(posts).map((post) => (
              <div className="border-b border-dashed border-gray-300 last:border-none">
                <Link href={`/posts/${post}`} key={post} className="">
                  <div className="py-2 md:py-4">
                    <h2 className="md:text-2xl font-extrabold flex items-center justify-between">
                      {posts[post].title}
                      <BiChevronRight size={32} className="mt-1 shrink-0 text-gray-300" />
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts,
    },
  };
}
