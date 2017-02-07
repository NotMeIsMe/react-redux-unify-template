const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

module.exports = {
  debug: false,
  webpack_stats_file_path: 'webpack-stats.json',
  webpack_assets_file_path: 'webpack-assets.json',
  assets:
  {
    images: {
      extensions: [ 'jpeg', 'jpg', 'png', 'gif', 'ico' ],
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser
    },
    style_modules: {
      extensions: ['less', 'scss', 'css'],
      filter: (module, regex, options, log) => {
        return options.development ? WebpackIsomorphicToolsPlugin.style_loader_filter(module, regex, options, log) : regex.test(module.name);
      },
      path: (module, options, log) => {
        return options.development ? WebpackIsomorphicToolsPlugin.style_loader_path_extractor(module, options, log) : module.name;
      },
      parser: (module, options, log) => {
        return options.development ? WebpackIsomorphicToolsPlugin.css_modules_loader_parser(module, options, log) : module.source;
      }
    }
  }
};



