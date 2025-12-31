class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        num_list = []
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if (nums[i]+nums[j]) == target:
                    num_list = [i, j]
        return num_list