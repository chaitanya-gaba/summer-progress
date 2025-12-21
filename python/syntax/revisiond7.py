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

def print_sum(*num):
   total = 0
   for n in num:
     total += n
   return total

print(print_sum(9))
print(print_sum(10))
print(print_sum(103, 342, 324))

def find_max(*args):
    max_num = args[0]
    for num in args:
        if num > max_num:
            max_num = num
    return max_num

print(find_max(234))                     # 234
print(find_max(2345, 23525, 1, 3242354)) # 3242354
print(find_max(-5, -10, -2))             # -2

def average_marks(name, *marks):
  total = 0
  itr = 0
  for i in marks:
    total += i
    itr += 1
  avg = total / itr
  return f"{name} scored: {total} with average of {avg}"

print(average_marks("Sup'", 12, 456, 78, 23))

# *args positional-elements into tuple
# **kwargs positional-elements into dictionay, key:value binded

def student_info(**data):
   return f"{data["name"]} has scored {data["math"]} in Mathematics and {data["sci"]} in Science. He resides in {data["loc"]} with his family."

print(student_info(name = "Ojas", math = 90, sci = 85, loc = "Hisar"))

def create_profile(**data):
   return_data = dict(data)
   return return_data

return_data = create_profile(username = "Ojas", email = "ojas.gaba@gmail.com", console = "PS5", city = "Hisar")
print(return_data)

def order_summary(*items, **info):
    # Print all items
    print("Items:", ", ".join(items))
    
    # Print extra info
    for key, value in info.items():
        print(f"{key}: {value}")

print(order_summary("Burger", "Fries", "Gulabo", name = "Ojas", add = "Arcity Villas"))