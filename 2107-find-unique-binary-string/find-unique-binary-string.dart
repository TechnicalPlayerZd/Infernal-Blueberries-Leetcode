class Solution {
  String findDifferentBinaryString(List<String> nums) {
    int n = nums[0].length;
    String ans = "";

    void generateBinary(String binary) {
      if (binary.length == n) {
        if (!nums.contains(binary)) {
          ans = binary;
        }
        return;
      }
      if (ans.isNotEmpty) return;
      generateBinary(binary + '0');
      generateBinary(binary + '1');
    }

    generateBinary('');
    return ans;
  }
}