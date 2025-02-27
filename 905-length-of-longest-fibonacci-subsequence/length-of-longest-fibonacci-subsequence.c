int lenLongestFibSubseq(int* arr, int arrSize) {
    int dp[arrSize][arrSize];
    memset(dp, 0, sizeof(dp));
    int maxLen = 0;

    for (int curr = 2; curr < arrSize; curr++) {
        int start = 0, end = curr - 1;
        while (start < end) {
            int pairSum = arr[start] + arr[end];
            if (pairSum > arr[curr]) {
                end--;
            } else if (pairSum < arr[curr]) {
                start++;
            } else {
                dp[end][curr] = dp[start][end] + 1;
                if (dp[end][curr] > maxLen) {
                    maxLen = dp[end][curr];
                }
                end--;
                start++;
            }
        }
    }
    return maxLen == 0 ? 0 : maxLen + 2;
}