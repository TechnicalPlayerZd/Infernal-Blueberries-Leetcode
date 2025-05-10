var minSum = function(nums1, nums2) {
    let sum1 = 0, sum2 = 0;
    let zero1 = 0, zero2 = 0;

    for (let num of nums1) {
        sum1 += num;
        if (num === 0) {
            sum1 += 1;
            zero1++;
        }
    }

    for (let num of nums2) {
        sum2 += num;
        if (num === 0) {
            sum2 += 1;
            zero2++;
        }
    }

    if ((zero1 === 0 && sum2 > sum1) || (zero2 === 0 && sum1 > sum2)) {
        return -1;
    }

    return Math.max(sum1, sum2);
};