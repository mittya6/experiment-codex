import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/Layout';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Java初心者向けサイト</title>
      </Head>
      <h1>Java初心者向け記事一覧</h1>
      <ul className="postList">
        {allPostsData.map(({ slug, title, date }) => (
          <li key={slug} className="postItem">
            <Link href={`/posts/${slug}`}>{title}</Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
