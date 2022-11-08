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
          <div className="container mx-auto px-4">
            <h1 className="text-gray-900 text-4xl font-extrabold">Sorry!</h1>
            <p className="text-gray-700">
              We could not find the page you are looking for...
            </p>
            <Link href="/">Go home</Link>
          </div>
        </section>
      </Layout>
    </div>
  );
}
