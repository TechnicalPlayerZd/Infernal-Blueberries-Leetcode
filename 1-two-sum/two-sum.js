/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashmap = {};

    for (let i=0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (complement in hashmap) {
            return [hashmap[complement], i];
        }
        hashmap[nums[i]] = i;
    }
};