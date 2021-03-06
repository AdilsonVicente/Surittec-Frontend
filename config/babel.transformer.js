const config = {
  babelrc: false,
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '2.6.5',
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    'transform-es2015-modules-commonjs',
  ],
};

module.exports = require('babel-jest').createTransformer(config);
