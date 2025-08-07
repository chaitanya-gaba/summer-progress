'''
This problem was asked by Google.

Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.

For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.

In this example, assume nodes with the same value are the exact same node objects.

Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.
'''
def commonElement(given1, given2):
    given1 = set(given1)
    given2 = set(given2)
    for itr in given1:
        if itr in given2:
            return itr

given1 = [3, 7, 8, 10]
given2 = [99, 1, 8, 10]
result = commonElement(given1, given2)
print(result)