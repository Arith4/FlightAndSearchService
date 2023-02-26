const express = require("express");
const bodyParser = require("body-parser");
const { port } = require("./config/serverConfig");

const setUpAndStartServer = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/", (req, res) => {
    res.send("hello");
  });
  app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });
};

setUpAndStartServer();
