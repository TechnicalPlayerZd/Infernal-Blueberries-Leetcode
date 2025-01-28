from collections import deque

class Solution:
    def findMaxFish(self, grid: List[List[int]]) -> int:
        def bfs(x, y):
            queue = deque([(x, y)])
            count = 0
            
            while queue:
                cx, cy = queue.popleft()
                if grid[cx][cy] > 0:
                    count += grid[cx][cy]
                    grid[cx][cy] = 0  # Mark as visited
                    if cx > 0 and grid[cx - 1][cy] > 0:
                        queue.append((cx - 1, cy))
                    if cx + 1 < len(grid) and grid[cx + 1][cy] > 0:
                        queue.append((cx + 1, cy))
                    if cy > 0 and grid[cx][cy - 1] > 0:
                        queue.append((cx, cy - 1))
                    if cy + 1 < len(grid[0]) and grid[cx][cy + 1] > 0:
                        queue.append((cx, cy + 1))
            
            return count

        max_fish = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] > 0:
                    max_fish = max(max_fish, bfs(i, j))
        
        return max_fish