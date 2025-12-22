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