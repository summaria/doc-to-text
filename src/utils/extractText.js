const checkFileType = require("./checkFileType");
const { pdfExtract, textExtractFromUrl } = require("../extract");

const VALID_FILE_TYPES = process.env.VALID_FILE_TYPES || ["pdf", "txt"];

let extractText = async (url) => {
  let fileType = checkFileType(url);
  if (VALID_FILE_TYPES.includes(fileType)) {
    return fileType === "pdf" ? await pdfExtract(url) : await textExtractFromUrl(url);
  } else {
    return null;    
  }
};

module.exports = extractText;
