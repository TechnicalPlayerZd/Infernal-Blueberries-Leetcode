class Solution:
    def longestPalindrome(self, s: str) -> str:
        t = '#' + '#'.join(s) + '#'
        n, c, r, max1, curr = len(t), 0, 0, 0, 0
        arr = [0] * n
        for i in range(n):
            mirror = 2*c - i
            if i < r:
                arr[i] = min(r-i, arr[mirror])
            while i+arr[i]+1 < n and i-arr[i]-1 >= 0 and t[i+arr[i]+1] == t[i-arr[i]-1]:
                arr[i] += 1
            if i + arr[i] > r:
                r, c = i + arr[i], i
            if arr[i] > max1:
                max1, curr = arr[i], i
        return s[(curr-max1)//2:(curr-max1)//2 + max1]