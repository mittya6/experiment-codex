import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="header">
        <Link href="/">
          <h2 className="siteTitle">Java Articles</h2>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
}
