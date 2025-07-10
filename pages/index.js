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
        <title>VBA初心者向け記事一覧</title>
      </Head>
      <img src="/title.png" alt="VBA初心者向け記事一覧" className="titleImage" />
      <ul className="postList">
        {allPostsData.map(({ slug, title }) => (
          <li key={slug} className="postItem">
            <Link href={`/posts/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
