var countFairPairs = function(nums, lower, upper) {
    nums.sort((a, b) => a - b);

    const find = (limit) => {
        let left = 0, right = nums.length - 1;
        let res = 0;
        while (left < right) {
            if (nums[left] + nums[right] <= limit) {
                res += (right - left);
                left++;
            } else {
                right--;
            }
        }
        return res;
    };

    return find(upper) - find(lower - 1);
};