var fs = require("fs");

function culmativeIncreases(numbers) {
    return numbers.filter((currentVal, index, arr) => currentVal && currentVal > arr[index - 1]).length;
}

function culmativeIncreasesFromFile() {
    var input = fs.readFileSync("day-1/data.txt", "utf-8").split("\n").map((v) => parseInt(v))

    return culmativeIncreases(input);
}

module.exports = {
    culmativeIncreases,
    culmativeIncreasesFromFile
}