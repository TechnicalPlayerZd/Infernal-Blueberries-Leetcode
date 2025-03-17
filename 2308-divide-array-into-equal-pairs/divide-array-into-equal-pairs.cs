public class Solution {
    public bool DivideArray(int[] nums) {
        int n = nums.Length;
        if (n % 2 != 0) return false;

        int[] freq = new int[501];

        foreach (int num in nums) freq[num]++;

        foreach (int cnt in freq) {
            if (cnt % 2 != 0) return false;
        }

        return true;
    }
}