var numberOfArrays = function(differences, lower, upper) {
    let minPrefix = 0, maxPrefix = 0, sum = 0;

    for (let diff of differences) {
        sum += diff;
        minPrefix = Math.min(minPrefix, sum);
        maxPrefix = Math.max(maxPrefix, sum);
    }

    const minStart = lower - minPrefix;
    const maxStart = upper - maxPrefix;

    return Math.max(0, maxStart - minStart + 1);
};