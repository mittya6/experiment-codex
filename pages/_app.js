import '../styles/global.css';
import 'highlight.js/styles/github-dark.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import hljs from 'highlight.js';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    hljs.highlightAll();
  }, [router.asPath]);

  return <Component {...pageProps} />;
}
