var countCompleteSubarrays = function(nums) {
    const totalDistinct = new Set(nums).size;
    let n = nums.length, count = 0;

    for (let i = 0; i < n; i++) {
        const seen = new Set();
        for (let j = i; j < n; j++) {
            seen.add(nums[j]);
            if (seen.size === totalDistinct) {
                count += n - j;
                break;
            }
        }
    }

    return count;
};