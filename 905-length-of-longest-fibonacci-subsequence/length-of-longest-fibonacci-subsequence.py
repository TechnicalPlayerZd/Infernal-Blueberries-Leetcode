class Solution:
    def lenLongestFibSubseq(self, arr):
        n = len(arr)
        mp = {arr[i]: i for i in range(n)}  # Map each element to its index
        t = [[2] * n for _ in range(n)]  # DP table initialized with 2

        max_length = 0

        # Step 1: Iterate over all pairs (j, k)
        for j in range(1, n):
            for k in range(j + 1, n):
                target = arr[k] - arr[j]  # Calculate target = arr[k] - arr[j]
                if target in mp and mp[target] < j:  # Check if target exists before `j`
                    i = mp[target]  # Get the index of the target
                    t[j][k] = t[i][j] + 1  # Update the DP table with the new subsequence length
                max_length = max(max_length, t[j][k])  # Keep track of the max length

        # Step 2: Return the longest Fibonacci-like subsequence length (min length of 3)
        return max_length if max_length >= 3 else 0