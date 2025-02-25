class Solution {
  int numOfSubarrays(List<int> arr) {
    const int MOD = 1000000007;
    int oddCount = 0, evenCount = 1, prefixSum = 0, result = 0;

    for (int num in arr) {
      prefixSum += num;

      if (prefixSum % 2 == 0) {
        result = (result + oddCount) % MOD;
        evenCount++;
      } else {
        result = (result + evenCount) % MOD;
        oddCount++;
      }
    }
    return result;
  }
}