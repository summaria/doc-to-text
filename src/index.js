const express = require("express");
var cors = require("cors");
const app = express();
const port = 5050;
const extractText = require("./utils/extractText");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Service running successfully!");
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/extract-text", async (req, res) => {
  try {
    const { url } = req.query;
    let extractedText = await extractText(url);
    res.status(200).json({
      data: {
        text: extractedText,
      },
    });
  } catch (err) {
    res.status(500).send({
      error: err.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
