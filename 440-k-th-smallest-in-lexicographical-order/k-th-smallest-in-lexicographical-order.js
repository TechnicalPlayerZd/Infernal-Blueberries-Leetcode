var findKthNumber = function(n, k) {
    let current = 1;
    k--;
    
    while (k > 0) {
        let count = countSteps(n, current, current + 1);
        if (count <= k) {
            current++;
            k -= count;
        } else {
            current *= 10;
            k--;
        }
    }
    
    return current;
};

function countSteps(n, curr, next) {
    let steps = 0;
    while (curr <= n) {
        steps += Math.min(n + 1, next) - curr;
        curr *= 10;
        next *= 10;
    }
    return steps;
}