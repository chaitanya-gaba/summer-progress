'''
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?
'''

def exceptSelfProductwithoutDivOp(elements):
    n = len(elements)
    left = [1] * n
    right = [1] * n
    result = [1] * n
    for iterator in range(1, n):
        left[iterator] = left[iterator - 1] * elements[iterator - 1]

    for iterator in range(n-2, -1, -1):
        right[iterator] = right[iterator + 1] * elements[iterator + 1]

    # i = 0
    for i in range(n):
        result[i] = left[i] * right[i]

    return result

elements = [12, 54, 9, -32, 3, 43, 1, 12] # [1, 2, 3, 4, 5, 0]
result = exceptSelfProductwithoutDivOp(elements)
print(result)

# def exceptSelfProductWithDivOp(array):
#     product = 1
#     result = list()
#     for val in array:
#         product *= val
#     for val in array:
#         result.append( int(product / val) )
#     return result

# def exceptSelfProductWithoutDivOp(array):
#     size = len(array)
    
#     left = [1] * size
#     right = [1] * size
#     result = [1] * size
    
#     for i in range(1, size):
#         left[i] = left[i-1] * array[i-1]
        
#     for i in range(size-2, -1, -1):
#         right[i] = right[i+1] * array[i+1]
        
#     for i in range(size):
#         result[i] = left[i] * right[i]
    
#     return result

# # Test
# # What if 0 is in array?
# # input = [12, 54, 9, -32, 3, 43, 1, 12]
# input = [1, 2, 3, 5, 3, 5]
# resultWithoutDivOp = exceptSelfProductWithoutDivOp(input)  # Output: [120, 60, 40, 30, 24]
# resultWithDivOp = exceptSelfProductWithDivOp(input)

# def matchArrays(array1, array2):
#     if len(array1) != len(array2):
#         return False
#     for i in range(len(array1)):
#         if array1[i] != array2[i]:
#             return False
#     return True

# print(matchArrays(resultWithDivOp, resultWithoutDivOp))    