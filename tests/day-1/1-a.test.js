const dayOne = require('../../day-1/a');

test('culmativeIncreases should output 0 for an input of 1', () => {
    expect(dayOne.culmativeIncreases([1])).toBe(0);
  });

test('culmativeIncreases should output 2 for an input of 1,2,3', () => {
  expect(dayOne.culmativeIncreases([1,2,3])).toBe(2);
});

test('culmativeIncreases should output 1 for an input of 1,3,2', () => {
    expect(dayOne.culmativeIncreases([1,3,2])).toBe(1);
});

test('culmativeIncreases should output 0 for an input of 1,1,1', () => {
    expect(dayOne.culmativeIncreases([1,1,1])).toBe(0);
});

test('culmativeIncreases should output 7 for an input of sample data', () => {
    expect(dayOne.culmativeIncreases([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])).toBe(7);
});

test('culmativeIncreasesFromFile should work ', () => {
    console.log(dayOne.culmativeIncreasesFromFile());
});