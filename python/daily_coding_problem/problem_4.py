'''
This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
'''

'''
class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        nums=set(nums)
        for i in range(1,len(nums)+2):
            if i not in nums:
                return i
'''

from typing import List

class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        updated = []
        for itr in nums:
            if itr > 0:
                updated.append(itr) # updated = [x for x in nums if x > 0]
        
        if not updated:
            return 1 # if all were -ve
        
        updated = list(set(updated))
        updated.sort()

        if updated[0] > 1:
            return 1
        
        for i in range(len(updated)):
            if i + 1 != updated[i]:
                return i+1
            
        return (updated[-1] + 1)

nums = [3, 4, -1, 1, 2]
result = Solution().firstMissingPositive(nums)
print(result)
# O(n Logn)


# def missingInteger(array, heighest, lowest):
#     unique = set()
#     for itr in range(lowest, heighest+1):
#         if itr == 0:
#             continue
#         unique.add(itr)
#     print(unique)
#     if unique != set(array):
#         new = unique - set(array)
#     else:
#         new = heighest+1
#     print(f"Missing lowest positive number is: {new}")


# array = [3, 4, -1, 1]
# heighest = max(array)
# lowest = min(array)
# missingInteger(array, heighest, lowest)
# array = [1, 2, 0]
# heighest = max(array)
# lowest = min(array)
# missingInteger(array, heighest, lowest)

'''Finer version from help'''
# def findLowestPositiveMissingInt(array):
#     heighest = max(array)
#     lowest = min(array)
    
#     # If the highest number is less than 1, smallest missing positive is 1
#     if heighest < 1:
#         print("Missing lowest positive number is: 1")
#         return 1
    
#     unique = set(range(1, heighest + 1))  # numbers from 1 to heighest+1 inclusive
#     # print(unique)
#     missing = unique - set(array)

#     if missing:
#         result = min(missing)
#     else:
#         result = heighest + 1

#     print(f"Missing lowest positive number is: {result}")
#     return result

# # Test cases
# def TestFindLowestPositiveMissingInt():
#     if findLowestPositiveMissingInt([3, 4, -1, 1]) != 2:
#         return False
#     if findLowestPositiveMissingInt([1, 2, 0]) != 3:
#         return False
#     if findLowestPositiveMissingInt([1, 2, 3, 4, 5]) != 6:
#         return False
#     if findLowestPositiveMissingInt([-3, -2, -1]) != 1:
#         return False
#     if findLowestPositiveMissingInt([9, 10, 11]) != 1:
#         return False
#     return True

# print(TestFindLowestPositiveMissingInt())