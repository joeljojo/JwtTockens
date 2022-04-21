const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const port = 9000;

app.get("/", (req, res) => {
  const user = {
    id: 1,
    username: "joel",
    password: 1234,
  };

  const secretKey = "ery34y8329";

  const tocken = jwt.sign({ user }, secretKey);
  res.json(tocken);
  console.log(tocken);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
