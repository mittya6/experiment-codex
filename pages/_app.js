import '../styles/global.css';
import 'highlight.js/styles/github-dark.css';
import { useEffect } from 'react';
import hljs from 'highlight.js';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return <Component {...pageProps} />;
}
