class Solution {

    /**
     * @param String[] $bank
     * @return Integer
     */
    function numberOfBeams($bank) {
        $deviceCounts = [];

        foreach ($bank as $row) {
            $count = substr_count($row, '1');
            if ($count > 0) {
                $deviceCounts[] = $count;
            }
        }

        $totalBeams = 0;
        for ($i = 0; $i < count($deviceCounts) - 1; $i++) {
            $totalBeams += $deviceCounts[$i] * $deviceCounts[$i + 1];
        }

        return $totalBeams;
        }
}