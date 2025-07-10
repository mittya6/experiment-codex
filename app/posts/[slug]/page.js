import { getAllPostSlugs, getPostData } from '../../../lib/posts';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((s) => ({ slug: s.params.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostData(params.slug);
  return { title: post.title };
}

export default async function Post({ params }) {
  const postData = await getPostData(params.slug);
  return (
    <article>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
