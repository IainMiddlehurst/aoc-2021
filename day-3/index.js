var fs = require("fs");

const addCurrentToPrevious = (previousValue, currentValue) => {
    return currentValue.map((el, index) => parseInt(el) + parseInt(previousValue[index]))
}

function calculatePowerConsumption(input) {
    const totalOfEachDigit = input.map(el => el.split('')).reduce(addCurrentToPrevious)
    const gamma = totalOfEachDigit.map(el => Math.round(el / input.length));
    const epsilon = gamma.map(el => el ? 0 : 1);

    return convertFromBinaryToInt(gamma.join('')) * convertFromBinaryToInt(epsilon.join(''));
}

function convertFromBinaryToInt(string) {
    return parseInt( string , 2 );
}


function calculatePowerConsumptionFromFile() {
    var input = fs.readFileSync("day-3/data.txt", "utf-8").split("\n")

    return calculatePowerConsumption(input);
}

module.exports = {
    calculatePowerConsumption,
    calculatePowerConsumptionFromFile
}