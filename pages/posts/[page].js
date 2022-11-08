import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Next.js + Tailwind | {router.query.page}</title>
        <meta name="description" content="Simple Next.js + Tailwind demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-gray-900 text-4xl font-extrabold">
              {router.query.page}
            </h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ea
              tempora voluptate?
            </p>
          </div>
        </section>
      </Layout>
    </div>
  );
}
