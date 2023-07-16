import { WebpackPluginInstance, ProgressPlugin, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): WebpackPluginInstance[] {
  return [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css", //куда складывать файлы, в билде
      chunkFilename: "css/[name].[contenthash].css"
    }),

    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    })
  ]
}