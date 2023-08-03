module.exports = {
  video: false,

  e2e: {
    setupNodeEvents(on, config) {},
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
};
