/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if (nums.length === 0){
        return init
    }
    newArray = nums.map(
        (num)=>{
            val = fn(init,num);
            init = val
            return val
        }
    )
    return newArray[newArray.length - 1]
};