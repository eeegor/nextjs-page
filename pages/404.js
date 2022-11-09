import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Not Found | Next.js + Tailwind</title>
        <meta name="description" content="Simple Next.js + Tailwind demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="py-12">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-gray-900 text-4xl font-extrabold mb-4">
              Sorry!
            </h1>
            <p className="text-gray-700">
              We could not find the page you are looking for...
            </p>
            <p className="mt-4">
              <Link href="/">
                <button className="px-4 py-2 rounded-md bg-green-400 hover:bg-green-600 transition-colors">Go home</button>
              </Link>
            </p>
          </div>
        </section>
      </Layout>
    </div>
  );
}
