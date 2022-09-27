const solution = require('./countSumofTwoRepresentations2.js');

test('test 1', () => {
    expect(solution(6, 2, 4)).toBe(2);
});

test('test 2', () => {
    expect(solution(6, 3, 3)).toBe(1);
});

test('test 3', () => {
    expect(solution(10, 9, 11)).toBe(0);
});

test('test 4', () => {
    expect(solution(24, 8, 16)).toBe(5);
});

test('test 5', () => {
    expect(solution(24, 12, 12)).toBe(1);
});

test('test 6', () => {
    expect(solution(93, 24, 58)).toBe(12);
});
