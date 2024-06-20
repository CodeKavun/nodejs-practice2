function parseText(string = "") {
    const result = {};

    for (let char of string) {
        result[char] = string.match(new RegExp(char, 'g')).length;
    }

    return result;
}

module.exports.parseText = parseText;