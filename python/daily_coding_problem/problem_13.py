'''
This problem was asked by Amazon.

Given an integer k and a string s, find the length of the longest substring that contains at most k distinct characters.

For example, given s = "abcba" and k = 2, the longest substring with k distinct characters is "bcb".
'''

def longestDistinctSubstring(givenString, k):
    temp = []
    for i in givenString:
        x = 1
        temp.append(i)
        j = 0
        while j < x:
            if all(temp[j] != temp[z] for z in range(0, x)):
                k += 1
            j += 1
        x += 1
    print(temp)

givenString = "abcba"
k = 2
result = longestDistinctSubstring(givenString, k)
print(result)