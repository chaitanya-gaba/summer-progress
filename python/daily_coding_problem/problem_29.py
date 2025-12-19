'''
Docstring for daily_coding_problem.problem_29
Print every character of string from a list which contains multiple elements(string elements)
'''
words = ["hello", "hi", "burra", "amigo"]
for i in "".join(words):
    print(i)

words = ["hello", "hi", 56, "amigo"]
for i in "".join(str(words)):
    print(i)