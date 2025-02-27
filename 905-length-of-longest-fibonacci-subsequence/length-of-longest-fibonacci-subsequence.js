var lenLongestFibSubseq = function(arr) {
    let n = arr.length;
    let mp = new Map();
    let t = Array.from({ length: n }, () => Array(n).fill(2));  // DP table initialized with 2

    // Step 1: Map each element to its index
    for (let i = 0; i < n; i++) {
        mp.set(arr[i], i);  // Mapping value to index
    }

    let maxLength = 0;

    // Step 2: Iterate over all pairs (j, k)
    for (let j = 1; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            let target = arr[k] - arr[j];  // Calculate target = arr[k] - arr[j]
            if (mp.has(target) && mp.get(target) < j) {  // Check if target exists before `j`
                let i = mp.get(target);  // Get the index of the target
                t[j][k] = t[i][j] + 1;  // Update the DP table with the new subsequence length
            }
            maxLength = Math.max(maxLength, t[j][k]);  // Keep track of the max length
        }
    }

    // Step 3: Return the longest Fibonacci-like subsequence length (min length of 3)
    return maxLength >= 3 ? maxLength : 0;
};