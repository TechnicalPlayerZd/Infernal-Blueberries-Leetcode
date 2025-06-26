var longestSubsequence = function(s, k) {
    let n = s.length;
    let zeros = 0, ones = 0;
    let value = 0n, pow = 1n;
    const bigK = BigInt(k);

    for (let c of s) {
        if (c === '0') zeros++;
    }

    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '1') {
            if (value + pow > bigK) continue;
            value += pow;
            ones++;
        }
        pow <<= 1n;
        if (pow > bigK) break;
    }

    return zeros + ones;
};