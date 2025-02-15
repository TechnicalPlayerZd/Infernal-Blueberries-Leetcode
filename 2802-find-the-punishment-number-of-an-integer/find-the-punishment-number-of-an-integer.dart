class Solution {
  int punishmentNumber(int n) {
    int sum = 0;
    for (int i = 1; i <= n; i++) {
      if (canPartition((i * i).toString(), 0, i)) {
        sum += (i * i);
      }
    }
    return sum;
  }

  // Backtracking function to check partition sum
  bool canPartition(String num, int index, int target) {
    if (index == num.length) return target == 0;

    int sum = 0;
    for (int i = index; i < num.length; i++) {
      sum = sum * 10 + (num[i].codeUnitAt(0) - '0'.codeUnitAt(0));
      if (sum > target) break; // Early stopping
      if (canPartition(num, i + 1, target - sum)) return true;
    }
    return false;
  }
}