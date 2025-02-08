#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    bool isPalindrome(int x) {
        string strx = to_string(x);
        string stry = strx;
        reverse(stry.begin(), stry.end());

        return strx == stry;

    }
};