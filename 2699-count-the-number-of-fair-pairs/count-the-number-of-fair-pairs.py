class Solution(object):
    def countFairPairs(self, nums, lower, upper):
        def find(limit):
            left, right = 0, len(nums) - 1
            res = 0
            while left < right:
                if nums[left] + nums[right] <= limit:
                    res += (right - left)
                    left += 1
                else:
                    right -= 1
            return res

        nums.sort()
        return find(upper) - find(lower - 1)