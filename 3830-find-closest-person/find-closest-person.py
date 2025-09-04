class Solution:
    def findClosest(self, x: int, y: int, z: int) -> int:
        diffx = abs(z-x)
        diffy = abs(z-y)
        if diffx-diffy == 0:
            return 0
        if diffx > diffy:
            return 2
        else:
            return 1
        
        