function solution(n, l, r) {
    let count = 0;
    for (let i = l; i <= r; i++) {
        if (n - i >= i && n - i <= r) {
            count++;
        }
    }
    return count;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test countSumofTwoRepresentations2

// alternative solution
