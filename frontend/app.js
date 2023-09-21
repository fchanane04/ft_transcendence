const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello from ft_transcendance FrontEnd inside a docker container...</h1>");
});

app.listen(3001, () => {
  console.log("Simple React app is running on port 3001...");
});