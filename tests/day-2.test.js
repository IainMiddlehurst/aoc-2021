const main = require('../day-2/index');

/* part one */

test('forward 5 down 1 equals 5', () => {
    expect(main.calculatePosition(['forward 5', 'down 1'])).toBe(5);
});

test('forward 1 down 2 equals 2', () => {
    expect(main.calculatePosition(['forward 1', 'down 2'])).toBe(2);
});

test('forward 1 down 3 up 2 equals 1', () => {
    expect(main.calculatePosition(['forward 1', 'down 3', 'up 2'])).toBe(1);
});

test('sample data outputs expected out', () => {
    expect(main.calculatePosition(['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'])).toBe(150);
});

test('calculatePositionFromFile works', () => {
    console.log(main.calculatePositionFromFile());
});

/* part two */

