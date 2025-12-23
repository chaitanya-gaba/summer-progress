'''
Docstring for daily_coding_problem.problem_30
Task:

Write a decorator debug that does the following for any function:

Prints: "Calling function: <function name>"

Prints the arguments passed

Runs the function

Prints: "Function <function name> returned: <result>"

Decorate this function:

def add(a, b):
    return a + b


Call add(5, 7)

Goal: Your decorator should work for any number of arguments and capture the return value.
'''

def debug(func):
    def inner(*args, **kwargs):
        print(f"Calling Function: {func.__name__}")
        print(f"Arguements: args = {args} and kwargs = {kwargs}")
        x = (func(*args, **kwargs))
        print(f"Function {func.__name__} returned: {x}")
        return x
    return inner

@debug
def add(a, b):
    return a + b

add(5, 7)

'''
Task: Create a decorator called track that does the following for any function:

Prints: "Calling function: <function name>"

Prints the arguments passed to the function (args and kwargs)

Measures and prints execution time in seconds

Calls the original function and captures its return value

Prints: "Function <function name> returned: <result>"

Returns the original return value

Function to test your decorator:

def multiply(a, b):
    return a * b

def greet(name):
    return f"Hello {name}!"
'''

import time

def track(func):
    def inner(*args, **kwargs):
        print(f"Calling Function: {func.__name__}")
        print(f"Arguments: {args} {kwargs}")
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"Function executed in: {end - start}")
        print(f"Function {func.__name__} returned: {result}")
        return result
    return inner

@track
def multiply(a, b):
    return a * b

@track
def greet(name):
    return f"Hello {name}"

multiply(5, 4)

greet("Ojas")