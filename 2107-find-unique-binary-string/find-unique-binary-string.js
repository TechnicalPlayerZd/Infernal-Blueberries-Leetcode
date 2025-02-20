var findDifferentBinaryString = function(nums) {
    let n = nums[0].length;
    let numSet = new Set(nums);

    function generateBinary(binary) {
        if (binary.length === n) {
            if (!numSet.has(binary)) {
                return binary;
            }
            return null;
        }
        let res = generateBinary(binary + '0');
        if (res) return res;
        return generateBinary(binary + '1');
    }

    return generateBinary("");
};