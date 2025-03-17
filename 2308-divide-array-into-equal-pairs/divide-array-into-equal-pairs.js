const divideArray = nums =>
    nums.reduce((a, v) => (a[v] = (a[v] | 0) + 1, a), []).every(v => !(v&1));