import './globals.css';
import HighlightWrapper from './highlight-wrapper';
import Link from 'next/link';

export const metadata = {
  title: 'VBA Articles',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <HighlightWrapper>
          <div className="container">
            <header className="header">
              <Link href="/">
                <h2 className="siteTitle">VBA Articles</h2>
              </Link>
            </header>
            <main>{children}</main>
          </div>
        </HighlightWrapper>
      </body>
    </html>
  );
}
