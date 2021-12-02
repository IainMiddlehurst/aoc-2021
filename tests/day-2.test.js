const main = require('../day-2/index');

/* part one refactored for part two */

test('down 1 forward 5 equals 25', () => {
    expect(main.calculatePosition(['down 1', 'forward 5'])).toBe(25);
});

test('down 2 forward 1 equals 2', () => {
    expect(main.calculatePosition(['down 2', 'forward 1'])).toBe(2);
});

test('down 3 up 2 forward 2 equals 3', () => {
    expect(main.calculatePosition(['down 3', 'up 2', 'forward 2'])).toBe(4);
});

test('sample data outputs expected out', () => {
    expect(main.calculatePosition(['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'])).toBe(900);
});

test('calculatePositionFromFile works', () => {
    console.log(main.calculatePositionFromFile());
});
