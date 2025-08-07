"""
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
"""

# def SumofTwo(elements, sum):
#     array1 = []
#     for iterator in elements:
#         target = sum - iterator
#         if target in array1:
#             return array1.index(target), elements.index(iterator)
#         array1.append(iterator)

# elements = [-2, 9, 3, 7, 15, 0]
# sum = 7
# result = SumofTwo(elements, sum)
# print(f"{sum} is sum of ", result)

# def SumofTwo(elements, sum):
#     array1 = []
#     i = 0
#     n = len(elements)

#     for iterator in elements:
#         target = sum - iterator

#         if target not in array1:
#                 array1.append((sum - iterator, iterator))
#         elif target in array1:
#             return array1


# elements = [-2, 9, 3, 7, 15, 0]
# sum = 7
# result = SumofTwo(elements, sum)
# print(f"{sum} is sum of ", result)

# def findpair(list1, k):
#     for i in range(0, len(list1)):
#         for j in range(0, len(list1)):
#             if k == list1[i] + list1[j]:
#                 return True    
#     return False       
# nums = [10, 5, 6, 7, 3]
# k = 100
# print(findpair(nums, k))

def findUniquePairs(elementsList, sum):
    result = list()
    tempSet = set()
    for i in elementsList:
        if (sum - i) in tempSet:
            result.append((sum-i, i))
        tempSet.add(i)
    return result

def findFirstPair(elements, sum):
    result = findUniquePairs(elements, sum)
    if len(result) > 0:
        return result[0]
    return
    

input = [1, -9, 8, 7, 2, 9, 0, 5]
sum = 7
print(findUniquePairs(input, sum))
print(findFirstPair(input, sum))

'''
def findUniquePairs(elementsList, target_sum):
    result = list()
    tempSet = set()
    value_to_index = dict()
    i = 0
    while i < len(elementsList):
        val = elementsList[i]
        complement = target_sum - val
        if complement in tempSet:
            result.append((value_to_index[complement], i))
        tempSet.add(val)
        value_to_index[val] = i
        i += 1
    return result

def findFirstPair(elements, target_sum):
    result = findUniquePairs(elements, target_sum)
    if len(result) > 0:
        return result[0]
    return

input_list = [1, -9, 8, 7, 2, 9, 0, 5]
sum_val = 7
print(findUniquePairs(input_list, sum_val))   # List of index pairs
print(findFirstPair(input_list, sum_val))    # First index pair
'''