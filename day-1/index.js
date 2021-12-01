var fs = require("fs");

function culmativeIncreases(numbers) {
    return numbers
        .filter((currentVal, index) => currentVal > numbers[index - 1])
        .length;
}

function culmativeIncreasesFromFile() {
    var input = fs.readFileSync("day-1/data.txt", "utf-8").split("\n").map((v) => parseInt(v))

    return culmativeIncreases(input);
}

function culmativeThreeWindowedIncreases(numbers) {
    return numbers
        .filter((currentVal, index) =>  numbers[index + 2] > numbers[index - 1])
        .length;
}

function culmativeThreeWindowedIncreasesFromFile() {
    var input = fs.readFileSync("day-1/data.txt", "utf-8").split("\n").map((v) => parseInt(v))

    return culmativeThreeWindowedIncreases(input);
}

module.exports = {
    culmativeIncreases,
    culmativeIncreasesFromFile,
    culmativeThreeWindowedIncreases,
    culmativeThreeWindowedIncreasesFromFile
}