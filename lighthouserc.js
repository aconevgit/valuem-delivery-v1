/** @type {import('@lhci/cli').LighthouseRcConfig} */
export default {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['/', '/blog', '/blog/first-post'],
    },
    assert: {
      assertions: {
        'categories:performance':     ['warn',  { minScore: 0.9 }],
        'categories:accessibility':   ['error', { minScore: 1.0 }],
        'categories:best-practices':  ['error', { minScore: 1.0 }],
        'categories:seo':             ['error', { minScore: 1.0 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
