const pdfExtract = require("./pdfExtract");
const textExtract = require("./textExtract");

module.exports = {
    pdfExtract,
    ...textExtract
};