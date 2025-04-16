/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function(nums, k) {
    let count = 0;
    const freq = {};
    let result = 0;
    let left = 0;

    for(let right=0; right<nums.length; right++){
        if(nums[right] in freq){
            let temp = freq[nums[right]]
            count += temp;
            freq[nums[right]] = temp + 1
        }else{
            freq[nums[right]] = 1
        }

        while(count >= k){
            result += nums.length - right;
            let leftCount = freq[nums[left]];
            count -= leftCount - 1;
            freq[nums[left]] = leftCount - 1;
            left++;
        }
    }
    return result;
};