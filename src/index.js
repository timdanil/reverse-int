module.exports = function reverse (n) {
    return n > 0 
    ? Number(String(n).split('').reverse().join('')) 
    :(Number(String(Math.abs(n)).split('').reverse().join('')))
}
