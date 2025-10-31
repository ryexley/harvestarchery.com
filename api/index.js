const { createRequestHandler } = require("@remix-run/vercel");

module.exports = createRequestHandler({
  build: require("./_build")
});

module.exports.config = {
  runtime: 'nodejs'
};
