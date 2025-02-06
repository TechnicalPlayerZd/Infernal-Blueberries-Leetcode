class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not(digits): return []

        phone = {2:"abc",3:"def",4:"ghi",5:"jkl",6:"mno",7:"pqrs",8:"tuv",9:"wxyz"}
        N = len(digits)

        def combinations(ind, s):
            if ind == N:
                ANS.append(s[:])
                return 
            
            for el in phone[int(digits[ind])]:
                combinations(ind + 1, s + el)
        
        ANS = []
        combinations(0, "")
        return ANS