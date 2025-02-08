#include <iostream>
#include <set>

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int, int> hashmap;
        int n = nums.size();

        for (int i =0; i < n; i++) {
            int complement = target - nums[i];
            if (hashmap.count(complement)) {
                return {hashmap[complement], i};
            }
            hashmap[nums[i]] = i;
        }
        return {};

    }
};