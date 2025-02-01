class Solution:
    def stringMatching(self, words: List[str]) -> List[str]:
        ans = []
        for i in range(len(words)):
            for y in range(len(words)):
                if i != y and words[y].find(words[i]) != -1:
                    ans.append(words[i])
                    break
        
        return ans
