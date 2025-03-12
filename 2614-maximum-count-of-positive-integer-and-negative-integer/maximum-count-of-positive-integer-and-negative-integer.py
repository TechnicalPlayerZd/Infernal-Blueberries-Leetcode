class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        ans = [0,0]
        for i in range(len(nums)):
            if nums[i] > 0:
                ans[0] +=1
            if nums[i] < 0:
                ans[1] +=1
        return max(ans)
        