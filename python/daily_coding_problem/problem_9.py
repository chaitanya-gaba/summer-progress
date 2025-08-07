'''
This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?
'''

'''Google-Help'''
def max_sum_no_two_adjacent(arr):
    if not arr:
        return 0 # for empty

    with_current = 0  # sum including current number
    without_current = 0  # sum excluding current number

    for x in arr:
        temp = max(with_current, without_current)
        with_current = without_current + x
        without_current = temp

    return max(with_current, without_current)


print(max_sum_no_two_adjacent([2, 4, 6, 2, 5]))   # 13 (2 + 6 + 5)
print(max_sum_no_two_adjacent([5, 1, 1, 5]))      # 10 (5 + 5)
print(max_sum_no_two_adjacent([5, 5, 10, 100, 10, 5]))  # 110 (5 + 100 + 5)
print(max_sum_no_two_adjacent([3, 2, 5, 10, 7]))  # 15 (3 + 5 + 7)
print(max_sum_no_two_adjacent([-1, -2, -3]))      # 0 (better to pick nothing)
