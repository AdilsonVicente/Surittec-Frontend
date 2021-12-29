module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: '2.6.5',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-proposal-class-properties', ['module-resolver', { root: ['./src'] }]],
};
