const express = require('express')
const app = express()
const port = 8000
const extractText = require("./utils/extractText");

app.get('/', (req, res) => {
  res.send('Service running successfully!');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.get('/extract-text', async (req, res) => {
  try {
    const { url } = req.query;
    let extractedText = await extractText(url);
    res.status(200).json({
      data: {
        text: extractedText
      }
    });
  } catch(err) {
    res.status(500).send({
      error: err.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});