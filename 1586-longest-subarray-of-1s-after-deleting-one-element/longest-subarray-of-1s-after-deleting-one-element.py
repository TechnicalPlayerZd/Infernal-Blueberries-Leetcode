class Solution(object):
    def longestSubarray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        l=0
        k=1
        m=-1
        for r in range(len(nums)):
            if nums[r]==1:
                if r-l>m:
                    m=r-l
                continue
            else:
                if k==1:
                    k-=1
                    if r-l>m:
                        m=r-l
                    continue
                else:
                    while nums[l]==1:
                        l+=1
                    l+=1
                    if r-l>m:
                        m=r-l
        return m
                