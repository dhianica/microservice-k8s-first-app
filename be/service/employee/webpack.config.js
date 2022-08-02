const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin-next');
// used to do the typechecking in a seperate process so the transpiling will be handled only by tsloader.
// speed up compilation of code
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const {
  NODE_ENV = 'production',
  NODE_PUBLISH = 'false',
  NODE_DOCKER = 'false',
  NODE_PM2 = 'false',
} = process.env;

const nextScript = () => {
  if (NODE_PUBLISH === 'true') return ['yarn run:publish']
  else {
    switch (NODE_ENV) {
      case 'development':
        if (NODE_PM2 === 'false' && NODE_DOCKER === 'false') return ['yarn run:dev']
        else if (NODE_PM2 === 'true' && NODE_DOCKER === 'false') return ['yarn run:pm2-dev']
        else if (NODE_PM2 === 'false' && NODE_DOCKER === 'true') return ['yarn run:docker-dev']
        break;
      case 'production':
        if (NODE_PM2 === 'false' && NODE_DOCKER === 'false') return ['yarn run:prod']
        else if (NODE_PM2 === 'true' && NODE_DOCKER === 'false') return ['yarn run:pm2-prod']
        else if (NODE_PM2 === 'false' && NODE_DOCKER === 'true') return ['yarn run:docker-prod']
        break;
      default: return ['yarn run:dev']
    }
  }
}

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
        scripts: nextScript()
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
