class Solution:
    def numberOfArrays(self, differences: List[int], lower: int, upper: int) -> int:
        total = 0
        min_prefix, max_prefix = 0, 0

        for diff in differences:
            total += diff
            min_prefix = min(min_prefix, total)
            max_prefix = max(max_prefix, total)

        min_start = lower - min_prefix
        max_start = upper - max_prefix

        return max(0, max_start - min_start + 1)