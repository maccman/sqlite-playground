import dynamic from "next/dynamic";
import Head from "next/head";

export default function PostsPage() {
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Posts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DynamicPosts />
      </main>
    </>
  );
}


export const DynamicPosts = dynamic<{}>(
  // We are giving extra hints to webpack to reduce the number of chunks it makes, improving performance.
  () => import('@/components/posts/posts').then((lib) => lib.Posts),
  {ssr: false},
)
