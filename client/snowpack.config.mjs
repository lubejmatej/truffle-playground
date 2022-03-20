import nodeResolve from '@rollup/plugin-node-resolve';

// The added "@type" comment will enable TypeScript type information via VSCode, etc.

/** @type {import('snowpack').SnowpackUserConfig } */
export default {
  devOptions: {
    open: 'none'
  },
  mount: {
    dist: '/',
    src: '/',
    public: '/'
  },
  plugins: [
    [
      '@snowpack/plugin-postcss'
    ]
  ],
  packageOptions: {
    knownEntrypoints: ['bn.js'],
    polyfillNode: true,
    plugins: [
      nodeResolve({
          browser: true,
          preferBuiltins: true
        }
      )
    ]
  }
};
