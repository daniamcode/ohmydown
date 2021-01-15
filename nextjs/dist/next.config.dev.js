"use strict";

var withImages = require('next-images');

module.exports = withImages();
module.exports = {
  webpack: function webpack(config, _ref) {
    var isServer = _ref.isServer;

    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      };
    }

    return config;
  }
};