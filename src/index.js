module.exports = function reverse (n) {
    const answer = Math.abs(n);
    return Number(String(answer). split('').reverse().join(''));
}
