var maxDistance = function(s, k) {
    let ans = 0;
    let north = 0, south = 0, east = 0, west = 0;
    
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === 'N') north++;
        else if (c === 'S') south++;
        else if (c === 'E') east++;
        else if (c === 'W') west++;
        
        const x = Math.abs(north - south);
        const y = Math.abs(east - west);
        const MD = x + y;
        const dis = MD + Math.min(2 * k, i + 1 - MD);
        ans = Math.max(ans, dis);
    }
    
    return ans;
};