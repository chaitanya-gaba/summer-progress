'''
Docstring for python.daily_coding_problem.problem_31
Fibonacci from Recusion
'''
def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(10):
    print(fibonacci(i))

# better way
# def fibonacci_loop(n):
#     a, b = 0, 1
#     for i in range(n):
#         a, b = b, a + b
#     return a

# print(fibonacci_loop(10))