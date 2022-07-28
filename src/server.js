const express = require("express");
const app = express();
const PORT = process.env.PORT || 3003;

app.get("/", (_, res) => res.send("hi there"));

app.listen(PORT, () => console.log("Server running on PORT", PORT));
