var countDays = function(days, meetings) {
    let events = [];

    // Convert meetings into start (+1) and end (-1) events
    for (let [start, end] of meetings) {
        events.push([start, 1]);
        events.push([end + 1, -1]);  // Mark the end of a meeting
    }

    // Sort events by day
    events.sort((a, b) => a[0] - b[0]);

    let availableDays = 0, activeMeetings = 0, prevDay = 1;

    for (let [currDay, change] of events) {
        if (activeMeetings === 0) {
            availableDays += (currDay - prevDay);
        }
        activeMeetings += change;
        prevDay = currDay;
    }

    // Count free days after the last meeting
    if (activeMeetings === 0) {
        availableDays += (days - prevDay + 1);
    }

    return availableDays;
};