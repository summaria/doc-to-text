const PDFJS = require("pdfjs-dist/legacy/build/pdf.js");

const loadPage = async (pageNum, doc) => {
  let content = await (await doc.getPage(pageNum))
    .getTextContent()
    .catch((err) => console.log(err));
  return content.items.map((item) => item.str).join(" ");
};

const pdfExtract = async (url) => {
  const { promise } = PDFJS.getDocument(url);
  let doc = await promise.catch((err) => console.log(err));
  const numPages = doc.numPages;
  output = "";

  for (let i = 1; i <= numPages; i++) {
    output += await loadPage(i, doc);
  }
  return output.replace(/\s+/g, " ").trim();
};

module.exports = pdfExtract;
