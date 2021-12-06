const main = require('../day-3/index');

/* part one */

test('calculatePowerConsumption should return 2 with input 01,11,01', () => {
    expect(main.calculatePowerConsumption(['01', '11', '01'])).toBe(2);
});

test('calculatePowerConsumption should return 198 with sample data', () => {
    expect(main.calculatePowerConsumption(
        ['00100', '11110', '10110', '10111', '10101', '01111', '00111', '11100', '10000', '11001', '00010', '01010'])
    ).toBe(198);
});

test('get solution from file', () => {
    // console.log(main.calculatePowerConsumptionFromFile());
});

/* part two */

test('calculteO2AndLifeSupport should return 230 with sample data', () => {
    expect(main.calculteO2AndLifeSupport(
        ['00100', '11110', '10110', '10111', '10101', '01111', '00111', '11100', '10000', '11001', '00010', '01010'])
    ).toBe(230);
});

test('calculteO2AndLifeSupport solution from file', () => {
    // console.log(main.calculteO2AndLifeSupportFromFile());
});