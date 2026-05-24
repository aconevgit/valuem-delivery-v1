// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

function rehypeLazyImages() {
  return function(tree) {
    function walk(node) {
      if (node.type === 'element' && node.tagName === 'img') {
        node.properties = node.properties ?? {};
        if (!node.properties.loading) node.properties.loading = 'lazy';
        if (!node.properties.decoding) node.properties.decoding = 'async';
      }
      if (node.children) node.children.forEach(walk);
    }
    walk(tree);
  };
}

export default defineConfig({
  site: 'https://valuemdelivery.com',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [mdx(), sitemap()],
  markdown: {
    rehypePlugins: [rehypeLazyImages],
  },
});