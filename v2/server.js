const path = require("path");
const moment = require("moment");
const responseTime = require("response-time");

const express = require("express");
const app = express();
app.use(responseTime());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (_, res) => res.send("hi there"));
app.get("/crash", (_, res) => {
  throw new Error("boom");
});
app.get("/hello-view", (_, res) => {
  let now = moment();
  res.render("hello", {
    title: "Express",
    currentTime: now.format("x"),
  });
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log("Server running on PORT", PORT));
