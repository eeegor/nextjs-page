import Head from "next/head";
import { Layout } from "../../components/Layout";
import { posts } from "../../data/posts";
import {
  BiTestTube,
  BiChip,
  BiDetail,
  BiHome,
  BiCodeAlt,
  BiCoffee,
  BiConfused,
  BiMessageX,
  BiDizzy,
  BiMailSend,
  BiTaskX,
  BiMeteor,
  BiShocked,
} from "react-icons/bi";
import { FaDog } from "react-icons/fa";
import React from "react";
import Link from "next/link";

const icons = {
  BiTestTube,
  BiChip,
  BiDetail,
  BiHome,
  BiCodeAlt,
  BiCoffee,
  BiConfused,
  BiMessageX,
  BiDizzy,
  BiMailSend,
  BiTaskX,
  BiMeteor,
  BiShocked,
  FaDog,
};

export default function Page({ post, relatedPosts }) {
  const Icon = icons[post.icon];

  return (
    <div>
      <Head>
        <title>{post.title} | Next.js + Tailwind</title>
        <meta name="description" content="Simple Next.js + Tailwind demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="py-12 md:py-24 bg-yellow-300">
          <div className="container mx-auto px-4">
            <div className="mb-4">
              <Icon size={72} />
            </div>
            <h1 className="text-gray-900 text-4xl font-extrabold pb-4">
              {post.title}
            </h1>
            <p className="text-gray-600">By GPT-3</p>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <p
              className="text-gray-700 text-lg md:text-xl"
              dangerouslySetInnerHTML={{ __html: post.story }}
            />
          </div>
        </section>
        <section className="py-12 md:py-24 border-t border-dashed border-gray-300">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-12">Related stories</h2>
            <div className="grid gap-6">
              {relatedPosts.map((post) => (
                <Link key={post.slug} href={`/posts/${post.slug}`}>
                  <div className="flex items-center">
                    <div className="mr-2">
                      {React.createElement(icons[post.icon], { size: 36 })}
                    </div>
                    <h3 className="font-bold text-lg">{post.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(posts).map((page) => ({
      params: {
        page,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  const relatedPosts = getMultipleRandom(
    Object.keys(posts).filter((p) => p !== params.page),
    3
  );

  return {
    props: {
      post: posts[params.page],
      relatedPosts: relatedPosts.map((post) => ({
        ...posts[post],
        slug: post,
      })),
    },
  };
}
