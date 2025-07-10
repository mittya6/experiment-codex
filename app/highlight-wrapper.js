'use client';
import { useEffect } from 'react';
import hljs from 'highlight.js';
import vba from 'highlightjs-vba';
import 'highlight.js/styles/github-dark.css';

hljs.registerLanguage('vba', vba);

export default function HighlightWrapper({ children }) {
  useEffect(() => {
    hljs.highlightAll();
  });
  return <>{children}</>;
}
