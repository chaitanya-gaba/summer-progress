"""Write a Python program that counts the occurrence of each character in a given string. For example, given the string:

text = "hello world"""

text = "hello world"
char_count = {}

for char in text:
    if char in char_count:
        char_count[char] += 1
    else:
        char_count[char] = 1

print(char_count)