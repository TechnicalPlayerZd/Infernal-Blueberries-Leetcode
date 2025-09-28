class Solution(object):
    def maxFrequencyElements(self, nums: List[int]) -> int:
        SetNums = set(nums)
        frequency = 0
        count = 0

        for i in SetNums:
            temp_freq = nums.count(i)
            if frequency == temp_freq:
                count += 1
            elif frequency < temp_freq:
                frequency = temp_freq
                count = 1
        return frequency * count
        