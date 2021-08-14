function checkFileType( url ) {
    return url.split("?")[0].split('.').pop().trim();
};

module.exports = checkFileType;