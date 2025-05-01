from collections import defaultdict

class Solution:
    def countPairs(self, nums: List[int], k: int) -> int:
        value_to_indices = defaultdict(list)
        count = 0

        for i, num in enumerate(nums):
            value_to_indices[num].append(i)

        for indices in value_to_indices.values():
            for i in range(len(indices) - 1):
                for j in range(i + 1, len(indices)):
                    if (indices[i] * indices[j]) % k == 0:
                        count += 1

        return count