import java.util.*;

class Solution {
    public int countPairs(int[] nums, int k) {
        Map<Integer, List<Integer>> map = new HashMap<>();
        int count = 0;

        for (int i = 0; i < nums.length; i++) {
            map.computeIfAbsent(nums[i], x -> new ArrayList<>()).add(i);
        }

        for (List<Integer> indices : map.values()) {
            for (int i = 0; i < indices.size() - 1; i++) {
                for (int j = i + 1; j < indices.size(); j++) {
                    if (((long) indices.get(i) * indices.get(j)) % k == 0) {
                        count++;
                    }
                }
            }
        }

        return count;
    }
}