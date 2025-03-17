class Solution {
public:
    bool divideArray(vector<int>& nums) {
        int n = nums.size();
        if (n % 2 != 0) return false;

        vector<int> freq(501, 0);

        for (int num : nums) freq[num]++;

        for (int cnt : freq) {
            if (cnt % 2 != 0) return false;
        }

        return true;
    }
};