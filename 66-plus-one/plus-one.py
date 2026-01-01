class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        i1 = int("".join(str(num) for num in digits))
        i1+=1
        i2 = list(map(int, str(i1)))
        return i2