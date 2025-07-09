import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

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
    <div>
      <Head>
        <title>Java初心者向けサイト</title>
      </Head>
      <h1>Java初心者向け記事一覧</h1>
      <ul>
        {allPostsData.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/posts/${slug}`}>{title}</Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
