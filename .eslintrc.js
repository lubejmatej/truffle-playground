module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./client/tsconfig.eslint.json'],
  },
  plugins: ['@typescript-eslint'],
  extends: ['react-app', 'prettier'],
};
