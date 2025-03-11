impl Solution {
    pub fn number_of_substrings(s: String) -> i32 {
        let mut count = [0; 3];
        let mut result = 0;
        let mut left = 0;

        for (right, c) in s.chars().enumerate() {
            count[(c as u8 - b'a') as usize] += 1;

            while count[0] > 0 && count[1] > 0 && count[2] > 0 {
                result += (s.len() - right) as i32;
                count[(s.as_bytes()[left] - b'a') as usize] -= 1;
                left += 1;
            }
        }

        result
    }
}