'''
This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
You should be as efficient with time and space as possible.
'''

class orderLog:
    def __init__(self, N):
        self.size = N
        self.container = []

    def record(self, order_id):
        if len(self.container) < self.size:
            self.container.append(order_id)
        else:
            self.container.pop(0)
            self.container.append(order_id)
        print(self.container)

    def get_last(self, i):
        if 1 <= i <= N:
            print(self.container[-i])

        # else:
        #     print("Invalid Order Request!")

N = 7 # Storage Capacity
log = orderLog(N)
log.record(101)
log.record(102)
log.record(103)
log.record(104)
log.get_last(4)