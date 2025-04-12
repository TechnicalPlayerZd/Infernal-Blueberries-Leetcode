import 'dart:math';

class Solution {
  int countGoodIntegers(int n, int k) {
    if (n == 1) return (9 ~/ k);

    Set<String> valid = {};
    int half = n ~/ 2;
    int upperLimit = pow(10, half).toInt();

    for (int x = 1; x < upperLimit; x++) {
      String part = x.toString().padLeft(half, '0');
      if (!part.endsWith('0')) {
        List<String> cands = [];
        String reversed = part.split('').reversed.join();

        if (n % 2 == 1) {
          for (int mid = 0; mid < 10; mid++) {
            cands.add(reversed + mid.toString() + part);
          }
        } else {
          cands.add(reversed + part);
        }

        for (String cand in cands) {
          if (int.parse(cand) % k == 0) {
            List<String> sortedCand = cand.split('')..sort();
            valid.add(sortedCand.join());
          }
        }
      }
    }

    int multinom(List<int> vals) {
      int ans = 1;
      int m = 1;
      for (int x in vals) {
        for (int i = 1; i <= x; i++) {
          ans *= m;
          ans ~/= i;
          m++;
        }
      }
      return ans;
    }

    int ans = 0;

    for (String key in valid) {
      Map<String, int> freq = {};
      for (int i = 0; i < key.length; i++) {
        String ch = key[i];
        freq[ch] = (freq[ch] ?? 0) + 1;
      }

      List<int> counts = freq.values.toList();
      int val = multinom(counts);

      if (freq.containsKey('0')) {
        freq['0'] = freq['0']! - 1;
        if (freq['0'] == 0) freq.remove('0');
        List<int> newCounts = freq.values.toList();
        val -= multinom(newCounts);
      }

      ans += val;
    }

    return ans;
  }
}