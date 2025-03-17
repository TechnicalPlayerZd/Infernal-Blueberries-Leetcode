class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        for i in range(max(nums)):
            if nums.count(i) % 2 != 0:
                return False
        return True