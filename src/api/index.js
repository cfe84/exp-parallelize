const express = require("express");

module.exports = (port) => {
  const app = express();

  app.get("/", (req, res) => {
    setInterval(() => {
      res.end("{}");
    }, 2500);
  });
  let server;
  return {
    start: () =>
      new Promise((resolve) => {
        server = app.listen(port, resolve());
      }),
    end: () => new Promise((resolve) => server.close(() => resolve())),
  };
};
