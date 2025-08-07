'''
This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
'''

def stringConvert(words):
    checkList = []
    for word in words:
        chars = list(word.lower())
        checkList.append(chars)
    return checkList

def stringMatch(checkList, query, words):
    check = list(query)
    result = []
    i = 0

    for itr in checkList:
        # print(i, itr)
        if itr[:len(check)] == check:
            result.append(words[i])
        i += 1

    return result

query = "ap"
words = ["apple", "apricot", "banana", "ape", "apply", "AP", "aP"]

converted = stringConvert(words)
print(converted)
match = stringMatch(converted, query, words)
print(match)


'''
def stringMatch(query, words):
    result = []
    query = query.lower()  # case-insensitive
    for word in words:
        if word.lower().startswith(query):
            result.append(word)
    return result

# Usage
query = "ap"
words = ["apple", "apricot", "banana", "ape", "apply", "AP", "aP"]

matched = stringMatch(query, words)
print(matched)
'''