'''
A builder is looking to build a row of N houses that can be of K different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.

Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal.
'''

# question not understandable as in what's required to be our output

# GitHub
def minimizeColorCost(costs):
    answers = []
    def helper(house, prev_color, total_cost, seq):
        if house == len(costs):
            answers.append(total_cost)
            return
        for color in range(len(costs[0])):
            if color != prev_color:
                helper(house + 1, color, total_cost + costs[house][color], seq + str(color))

    helper(0, -1, 0, "")
    return min(answers)

arr = [[1,2,3,4], [1,2,1,0], [6,1,1,5], [2,3,5,5]]
print(minimizeColorCost(arr))