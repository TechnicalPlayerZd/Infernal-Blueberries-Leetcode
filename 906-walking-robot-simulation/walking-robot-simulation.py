class Solution:
    def robotSim(self, commands: List[int], obstacles: List[List[int]]) -> int:
        # 1. State Initialization
        # Directions: North, East, South, West (ordered for 90-degree turns)
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        d_idx = 0 # Starting North
        
        x, y = 0, 0
        max_dist_sq = 0
        
        # 2. Obstacle Representation (The Constraints)
        # Using a set of tuples for O(1) lookup
        obstacle_set = {tuple(o) for o in obstacles}
        
        # 3. Simulation (State Transitions)
        for cmd in commands:
            if cmd == -1: # Turn Right
                d_idx = (d_idx + 1) % 4
            elif cmd == -2: # Turn Left
                d_idx = (d_idx - 1) % 4
            else:
                # Move Forward k units
                dx, dy = directions[d_idx]
                for _ in range(cmd):
                    if (x + dx, y + dy) in obstacle_set:
                        break
                    x += dx
                    y += dy
                
                # Update Objective: Maximum squared Euclidean distance
                max_dist_sq = max(max_dist_sq, x*x + y*y)
        
        return max_dist_sq        