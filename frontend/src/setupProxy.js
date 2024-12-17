const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',  // Specify the path you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:5000',  // Specify the target URL of your backend
      changeOrigin: true,
    })
  );
};
