const express = require("express");
const https = require("https");
const fs = require("fs");
const { stringify } = require("querystring");
const { type } = require("express/lib/response");
const app = express();

const port = 10045;
// const path = "F:\\Sublime Text (4121)\\dailyFun";
const path = "F:/Sublime Text (4121)/dailyFun";
// const path = "C:/Users/Prakhar Rai/Desktop/cf tool/test_parser";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", (req, res) => {
  const data = req.body;
  //   console.log(data);
  let inputs = "";

  let tests = data.tests;
  inputs += String(tests.length) + "\n";
  console.log(tests);
  tests.forEach((test) => {
    inputs += test.input;
  });

  // console.log(typeof inputs);
  fs.writeFile(path + "/input.txt", inputs, "utf8", (e) => {
    if (e) console.log(e);
  });

  console.log("tests parsed");
});

app.listen(port, (req, res) => {
  console.log(`server is listening on ${port}`);
});
