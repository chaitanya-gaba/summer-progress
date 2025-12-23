# nonlocal
def outer():
    x = 5

    def inner():
        x = 10

    inner()
    print(x)
# Without nonlocal, a new local variable is created inside the inner function.
# This x is different from the x in the outer function.
# When the inner function finishes execution, its local x is destroyed.

outer() # 5

def outer():
    x = 5

    def inner():
        nonlocal x
        x = 10
    
    inner()
    print(x)

outer()
# nonlocal tells Python that this x belongs to the enclosing (outer) function,
# so Python should not create a new local variable, but update the existing one.

# lambda
variable_name = lambda input_variable : input_variable + 10 # this is basically the logic or work that had to be done or processed on the variable jaise +, -, *, etc
print(variable_name(5))

variable_name = lambda input_variable1, input_variable2 : input_variable1 + input_variable2
print(variable_name(5, 6))

variable_name = lambda input_variable1, input_variable2, input_variable3 : input_variable1 * input_variable2 ** input_variable3
print(variable_name(2, 4, 6))

numbers = [1, 2, 3, 4, 5]
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)

numbers = [1, 2, 3, 4, 5, 6, 7, 8]
odd_numbers = list(filter(lambda x: x % 2 != 0, numbers))
print(odd_numbers)

students = [("Emil", 25), ("Tobias", 22), ("Linus", 28)]
sorted_students = sorted(students, key=lambda x: x[1])
print(sorted_students)

# decorators
def changecase(func):

  def myinner():
    return func().upper()

  return myinner


@changecase
def myfunction():
  return "Hello Sally"


print(myfunction())

def changecase(func):
  def myinner():
    return func().upper()
  return myinner

@changecase
def myfunction():
  return "Hello Sally"

@changecase
def otherfunction():
  return "I am speed!"

print(myfunction())
print(otherfunction())

def changecase(func):
  def myinner(x):
    return func(x).upper()
  return myinner

@changecase
def myfunction(nam):
  return "Hello " + nam

print(myfunction("John"))

def changecase(func):
  def myinner(*args, **kwargs):
    return func(*args, **kwargs).upper()
  return myinner

@changecase
def myfunction(nam):
  return "Hello " + nam

print(myfunction("John"))

def changecase(n):
  def changecase(func):
    def myinner():
      if n == 1:
        a = func().lower()
      else:
        a = func().upper()
      return a
    return myinner
  return changecase

@changecase(1)
def myfunction():
  return "Hello Linus"

print(myfunction())

def changecase(func):
  def myinner():
    return func().upper()
  return myinner

def addgreeting(func):
  def myinner():
    return "Hello " + func() + " Have a good day!"
  return myinner

@changecase
@addgreeting
def myfunction():
  return "Tobias"

print(myfunction())


import time

def timer_func(func):
  def wrapper(*args):
    start = time.time()
    print(f"Start: {start}")
    func(*args)
    end = time.time()
    print(f"End: {end}")
    return f"{func.__name__} ran in {end - start}"
  return wrapper

@timer_func
def delay(n):
  time.sleep(n)

x = delay(0)
print(x)

def name_printer(func):
  def inner():
    print(f"Name of the function is: {func.__name__}")
    func()
  return inner

@name_printer
def greet():
  print("Hello")

greet()

def deco(func):
  def inner(*args, **kwargs):
    print(f"Calling Function: {func.__name__}")
    func(*args, **kwargs)
  return inner

@deco
def greet(name, age):
  print(f"Hello {name}, you are {age} years old!")

greet("Ojas", 21)