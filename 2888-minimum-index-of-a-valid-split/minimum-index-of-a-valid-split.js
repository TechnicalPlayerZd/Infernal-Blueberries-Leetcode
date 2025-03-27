var minimumIndex = function(nums) {
    let freq = new Map();
    let dom = 0, count = 0, n = nums.length;

    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (let [k, v] of freq) {
        if (v > Math.floor(n / 2)) {
            dom = k;
            count = v;
            break;
        }
    }

    let leftCount = 0;
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === dom) leftCount++;
        let leftSize = i + 1;
        let rightCount = count - leftCount;
        let rightSize = n - leftSize;

        if (leftCount > Math.floor(leftSize / 2) && rightCount > Math.floor(rightSize / 2)) {
            return i;
        }
    }

    return -1;
};