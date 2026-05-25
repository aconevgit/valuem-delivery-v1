// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

/**
 * @typedef {{ type: string, tagName?: string, properties?: Record<string, unknown>, children?: unknown[] }} HastNode
 */

/** @returns {(tree: HastNode) => void} */
function rehypeLazyImages() {
  /** @param {HastNode} node */
  function walk(node) {
    if (node.type === 'element' && node.tagName === 'img') {
      node.properties = node.properties ?? {};
      if (!node.properties['loading']) node.properties['loading'] = 'lazy';
      if (!node.properties['decoding']) node.properties['decoding'] = 'async';
    }
    if (node.children) /** @type {HastNode[]} */ (node.children).forEach(walk);
  }
  return function (tree) { walk(tree); };
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
