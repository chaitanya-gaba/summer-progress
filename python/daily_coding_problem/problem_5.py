'''
This problem was asked by Jane Street.

cons(a, b) constructs a dummyPair, and car(dummyPair) and cdr(dummyPair) returns the first and last element of that dummyPair.
For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.

Given this implementation of cons:

def cons(a, b):
    def dummyPair(f):
        return f(a, b)
    return dummyPair
Implement car and cdr.
'''

def cons(a, b):
    def pairFunction(callBack_func):
        return callBack_func(a, b)
    return pairFunction

def getFirst(a, b):
    return a

def getSecond(a, b):
    return b

pair = cons(3, 4)
print(pair)
print(pair(getFirst))
print(pair(getSecond))

# print(pair(getFirst)) se hum sabse pehle cons def mein rHE hain due the word pair, fir hum usme function ka
# naam bhej rahe hain, tabhi fir vo hume return mein de raha print(getFirst(a,b))?

# def cons(a, b):
#     def dummyPair(f):
#         return f(a, b)
#     return dummyPair

# def car(pair):
#     return pair(lambda a, b: a)

# def cdr(pair):
#     return pair(lambda a, b: b)

# pair = cons("apple", "banana")
# print(car(pair))
# print(cdr(pair))