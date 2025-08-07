'''
This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
'''

def num_decodings(stream):
    if not stream or stream[0] == '0':
        return 0

    n = len(stream)
    tempList = [0] * (n + 1)

    '''google - logic'''
    tempList[0] = 1  # empty string
    tempList[1] = 1  # first digit is guaranteed non-zero

    for i in range(2, n + 1):
        # Single digit
        if stream[i - 1] != '0':
            tempList[i] += tempList[i - 1]
        # Two-digit
        two_digit = int(stream[i - 2:i])
        if 10 <= two_digit <= 26:
            tempList[i] += tempList[i - 2]

    return tempList[n]

print(num_decodings("111"))     # 3 ("aaa", "ka", "ak")
print(num_decodings("12"))      # 2 ("ab", "l")
print(num_decodings("226"))     # 3 ("bbf", "bz", "vf")
print(num_decodings("0"))       # 0 (invalid)
print(num_decodings("10"))      # 1 ("j")
print(num_decodings("10120"))     # 0 (no valid decoding)