var fs = require("fs");

const addCurrentToPrevious = (previousValue, currentValue) => {
    return currentValue.map((el, index) => parseInt(el) + parseInt(previousValue[index]))
}

function getMostCommonBits(input) {
    return input.map(el => el.split('')).reduce(addCurrentToPrevious).map(el => Math.round(el / input.length));
}

function flipBinaryArray(binArray) {
    return binArray.map(el => el ? 0 : 1);
}

function calculatePowerConsumption(input) {
    const gamma = getMostCommonBits(input)
    const epsilon = flipBinaryArray(gamma);

    return convertFromBinaryToInt(gamma.join('')) * convertFromBinaryToInt(epsilon.join(''));
}

function calculteO2AndLifeSupport(input) {
    const mostCommonBits = getMostCommonBits(input);
    let filteredInput = input;
    let oxygen;
    let lifeSupport;
    
    mostCommonBits.forEach((commonBit, index) => {
        if(filteredInput.length > 1) {
            const realMostCommonBit = getMostCommonBits(filteredInput);
            filteredInput = filteredInput.filter(el => el[index] == realMostCommonBit[index]);
            if(filteredInput.length === 1) {
                oxygen = filteredInput;
            }
        } 
    });

    filteredInput = input;
    flipBinaryArray(mostCommonBits).forEach((rareBit, index) => {
        if(filteredInput.length > 1) {
            const realRareBit = flipBinaryArray(getMostCommonBits(filteredInput));
            filteredInput = filteredInput.filter(el => el[index] == realRareBit[index]);
            if(filteredInput.length === 1) {
                lifeSupport = filteredInput;
            }
        } 
    });
    
    return convertFromBinaryToInt(oxygen[0]) * convertFromBinaryToInt(lifeSupport[0]);
}

function convertFromBinaryToInt(string) {
    return parseInt( string , 2 );
}


function calculatePowerConsumptionFromFile() {
    var input = fs.readFileSync("day-3/data.txt", "utf-8").split("\n")

    return calculatePowerConsumption(input);
}

function calculteO2AndLifeSupportFromFile() {
    var input = fs.readFileSync("day-3/data.txt", "utf-8").split("\n")

    return calculteO2AndLifeSupport(input);
}

module.exports = {
    calculatePowerConsumption,
    calculatePowerConsumptionFromFile,
    calculteO2AndLifeSupport,
    calculteO2AndLifeSupportFromFile
}