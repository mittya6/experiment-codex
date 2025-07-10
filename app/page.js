import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export const metadata = {
  title: 'VBA初心者向け記事一覧',
};

export default async function Home() {
  const allPostsData = getSortedPostsData();
  return (
    <>
      <img src="/title.png" alt="VBA初心者向け記事一覧" className="titleImage" />
      <ul className="postList">
        {allPostsData.map(({ slug, title }) => (
          <li key={slug} className="postItem">
            <Link href={`/posts/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
