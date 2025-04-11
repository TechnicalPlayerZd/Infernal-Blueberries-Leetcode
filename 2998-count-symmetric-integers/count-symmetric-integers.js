var countSymmetricIntegers = function(low, high) {
    let count = 0; // \U0001f365 Shadow clone counter

    for (let num = low; num <= high; num++) {
        let str = num.toString(); // \U0001f3ad Convert number to string
        let len = str.length;

        // ⚠️ Odd-digit numbers can't be symmetric
        if (len % 2 !== 0) continue;

        let half = len / 2;
        let leftSum = 0;
        let rightSum = 0;

        // ⬅️ Sum of left side chakra
        for (let i = 0; i < half; i++) {
            leftSum += parseInt(str[i]); 
        }

        // ➡️ Sum of right side chakra
        for (let i = half; i < len; i++) {
            rightSum += parseInt(str[i]);
        }

        // ☯️ Check for chakra balance
        if (leftSum === rightSum) {
            count++; // ✅ Add to mission count
        }
    }

    return count; // \U0001f3af Final chakra-balanced count
};