const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
// used to do the typechecking in a seperate process so the transpiling will be handled only by tsloader.
// speed up compilation of code
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const {
  NODE_ENV = 'production',
  NODE_LOCAL = 'false',
  NODE_PUBLISH = 'false',
  NODE_DOCKER = 'false'
} = process.env;

module.exports = {
  entry: './src/bin/www.ts',
  target: 'node',
  mode: NODE_ENV,
  watch: NODE_ENV === 'development',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.swcMinify,
        // `terserOptions` options will be passed to `swc` (`@swc/core`)
        // Link to options - https://swc.rs/docs/config-js-minify
        terserOptions: {}
      })
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new WebpackShellPlugin({
      onBuildEnd: {
        scripts: 
        (NODE_PUBLISH === 'true') ? ['yarn run:publish'] :
        (NODE_ENV === 'development' && NODE_LOCAL === 'true') ? ['yarn run:dev'] :  
        (NODE_ENV === 'production' && NODE_LOCAL === 'true') ? ['yarn run:prod'] :
        (NODE_ENV === 'development' && NODE_DOCKER === 'false') ? ['yarn run:pm2-dev'] : 
        (NODE_ENV === 'production' && NODE_DOCKER === 'false') ? ['yarn run:pm2-prod'] :
        (NODE_ENV === 'development' && NODE_DOCKER === 'true') ? ['yarn run:docker-dev'] :
        (NODE_ENV === 'production' && NODE_DOCKER === 'true') ? ['yarn run:docker-prod'] : ['yarn run:dev']
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: NODE_ENV === 'development' ? 'tsconfig.json' : 'tsconfig.prod.json'
            }
          }
        ]
      }
    ]
  }
};
