class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        sol = []
        blocks = list(blocks)
        for i in range(len(blocks) - k + 1):
            sol_number = 0
            for j in range(i, i+k):
                if blocks[j] == "W":
                    sol_number += 1
            sol.append(sol_number)
        return min(sol)
