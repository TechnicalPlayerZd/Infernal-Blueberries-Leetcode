class Solution:
    def myAtoi(self, s: str) -> int:
        # Step 1: Trim leading whitespaces
        s = s.lstrip()
        
        # Step 2: Handle empty string case
        if len(s) == 0:
            return 0
        
        # Step 3: Initialize variables
        ans, sign = 0, 1
        
        # Step 4: Check for sign
        if s[0] == "-":
            sign = -1
            s = s[1:]  # Remove the sign
        elif s[0] == "+":
            s = s[1:]  # Remove the sign
        
        # Step 5: Parse digits
        for char in s:
            if char.isdigit():
                ans = ans * 10 + int(char)
            else:
                break  # Stop at the first non-digit character
        
        # Apply the sign
        ans *= sign
        
        # Step 6: Clamp result within 32-bit signed integer range
        minR = -(2**31)
        maxR = 2**31 - 1
        
        if ans > maxR:
            return maxR
        elif ans < minR:
            return minR
        else:
            return ans