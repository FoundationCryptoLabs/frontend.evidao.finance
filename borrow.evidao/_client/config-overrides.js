module.exports = function override(config, env) {
  // let loaders = config.resolve;
  // loaders.fallback = {
  //   fs: false,
  //   tls: false,
  //   net: false,
  //   http: require.resolve("stream-http"),
  //   https: false,
  //   path: require.resolve("path-browserify"),
  //   stream: require.resolve("stream-browserify"),
  //   os: require.resolve("os-browserify"),
  //   crypto: require.resolve("crypto-browserify"),
  //   util: require.resolve("util/"),
  // };

  return config;
};
