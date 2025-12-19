# functions
def my_name(name):
    print(f"My name is...{name}")

name = input("Enter your name: - ")
my_name(name)
my_name(name)
my_name(name)

def return_my_name(name):  # 'name' is parameter
    x = f"My name is .... {name}"
    return x

name = input("Enter your name: - ")  # variable storing user input
my_strung = return_my_name(name)     # 'name' is argument here
print(my_strung)                     # prints the returned value

def get_greeting():
  return "Hello from a function"

print(get_greeting())

def name_age(name, age):
   x = f"My names is {name} and I'm {age} old."
   return x

name = input("Enter your name: - ")
age = input("Enter your age: - ")
return_from_def = name_age(name, age)
print(return_from_def)

def my_function(name = "friend"):
  print("Hello", name)

my_function("Emil")
my_function("Tobias")
my_function() # default parameter
my_function("Linus")

def my_function(fruits):
  for fruit in fruits:
    print(fruit)

my_fruits = ["apple", "banana", "cherry"]
my_function(my_fruits)

def my_function():
  return ["apple", "banana", "cherry"]

fruits = my_function()
print(fruits[0])
print(fruits[1])
print(fruits[2])

def try_func():
   return [21, "Kanika"]

x = try_func()
print(x[0])
print(x[1])

def my_function(name, /):
  print("Hello", name)

my_function("Emil")

def my_function(a, b, /, *, c, d):
  return a + b + c + d

result = my_function(5, 10, c = 15, d = 20)
print(result)