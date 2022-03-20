module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@components": "./components",
            "@contexts": "./contexts",
            "@js": "./js",
            "@managers": "./managers",
          },
        },
      ],
    ],
  };
};
