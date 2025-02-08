/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const b = x.toString();
    let n = b.split("").reverse().join("");
    if (b == n) {
        return true
    }
    return false
};