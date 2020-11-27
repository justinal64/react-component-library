const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/preset-scss',
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      // this is for both less and scss
      test: /.*\.(?:le|c|sc)ss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    });
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name]-[contenthash].css',
        chunkFilename: '[id]-[contenthash].css',
      })
    );
    return config;
  },
};
