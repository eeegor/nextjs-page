import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js + Tailwind</title>
        <meta name="description" content="Simple Next.js + Tailwind demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-gray-900 text-4xl font-extrabold">Hello</h1>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ea
              tempora voluptate?
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}