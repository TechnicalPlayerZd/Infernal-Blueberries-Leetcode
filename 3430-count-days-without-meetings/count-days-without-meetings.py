class Solution:
    def countDays(self, days: int, meetings: List[List[int]]) -> int:
        events = []

        # Convert meetings into start (+1) and end (-1) events
        for start, end in meetings:
            events.append((start, 1))
            events.append((end + 1, -1))  # Mark the end of a meeting

        # Sort events by day
        events.sort()

        available_days, active_meetings, prev_day = 0, 0, 1

        for curr_day, change in events:
            if active_meetings == 0:
                available_days += (curr_day - prev_day)

            active_meetings += change
            prev_day = curr_day

        # Count free days after the last meeting
        if active_meetings == 0:
            available_days += (days - prev_day + 1)

        return available_days

        