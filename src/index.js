const express = require("express");
const { port } = require("./config/serverConfig");

const setUpAndStartServer = async () => {
  const app = express();
  app.get("/", (req, res) => {
    res.send("hello");
  });
  app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });
};

setUpAndStartServer();
