let fs = require("fs").promises;
const axios = require("axios");

const textExtract = async (url) => {
  return (await fs.readFile(url)).toString();
};

const textExtractFromUrl = async (url) => {
  return await axios.get(url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

module.exports = { textExtract, textExtractFromUrl };