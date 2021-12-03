const main = require('../day-3/index');

/* part one */

test('01,11,01 outputs 2', () => {
    expect(main.calculatePowerConsumption(['01', '11', '01'])).toBe(2);
});

test('sample data should output 198', () => {
    expect(main.calculatePowerConsumption(
        ['00100', '11110', '10110', '10111', '10101', '01111', '00111', '11100', '10000', '11001', '00010', '01010'])
    ).toBe(198);
});

test('should work', () => {
    console.log(main.calculatePowerConsumptionFromFile());
});
