const express = require("express");
const app = express();

app.get("/", (_, res) => res.send("hi there"));

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log("Server running on PORT", PORT));
