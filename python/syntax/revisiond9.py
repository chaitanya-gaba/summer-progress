# decorators
def outer(fx):
    def inner():
        print("Start")
        fx()
        print("End")
    return inner

@outer
def hello():
    print("Hello")

hello()

def outer(fx):
    def inner():
        print("Start")
        fx()
        print("End")
    return inner

def hello():
    print("Hello")

hello = outer(hello)
hello()

# recursion
def counter(n):
    if n <= 0:
        print("Done")
    else:
        print(n)
        counter(n - 1)

counter(7)

def factorial(num, n):
    if n == 0 or n == 1:
        return num
    else:
        return factorial(num * n, n - 1)
    
print(factorial(1, 5))

# fibonacci sequnce
def fibo(n, initial = 0):
    
    pass

print(fibo(5))
# incomplete