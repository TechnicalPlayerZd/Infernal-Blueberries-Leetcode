/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    let total = 0;

    function dfs(index, currentXor) {
        if (index === nums.length) {
            total += currentXor;
            return;
        }

        // Include nums[index]
        dfs(index + 1, currentXor ^ nums[index]);

        // Exclude nums[index]
        dfs(index + 1, currentXor);
    }

    dfs(0, 0);
    return total;
};