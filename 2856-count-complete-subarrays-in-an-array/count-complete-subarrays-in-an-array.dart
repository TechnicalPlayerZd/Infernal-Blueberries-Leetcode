class Solution {
  int countCompleteSubarrays(List<int> nums) {
    final totalDistinct = Set<int>.from(nums).length;
    int n = nums.length;
    int count = 0;
    
    for (int i = 0; i < n; i++) {
      Set<int> seen = {};
      for (int j = i; j < n; j++) {
        seen.add(nums[j]);
        if (seen.length == totalDistinct) {
          count += n - j;
          break;
        }
      }
    }
    
    return count;
  }
}