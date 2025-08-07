'''
This problem was asked by Facebook.

Given a stream of elements too large to store in memory, pick a random element from the stream with uniform probability.
'''

class randomChoice:
    def __init__(self):
        pass

stream = [2, 3, 5, 1, 9]
choosed = randomChoice(stream)
print(choosed)

# import random

# def probability(stream):
#     choice = None
#     count = 0
    
#     for itr in stream:
#         count += 1
#         if random.randint(1, count) == count:
#             choice = itr
    
#     return choice
    

# stream = [2, 3, 5, 1, 9]
# answer = probability(stream)
# print(answer)


import random

def randomChoice(stream):
    choosed = random.choice(stream)
    return choosed

stream = [2, 3, 5, 1, 9]
choosed = randomChoice(stream)
print(choosed)