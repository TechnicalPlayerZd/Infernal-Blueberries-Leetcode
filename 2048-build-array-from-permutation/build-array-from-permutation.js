var buildArray = function(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let newVal = nums[nums[i]] % n;
        nums[i] = nums[i] + newVal * n;
    }
    for (let i = 0; i < n; i++) {
        nums[i] = Math.floor(nums[i] / n);
    }
    return nums;
};