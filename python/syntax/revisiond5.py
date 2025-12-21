user = {"name" : "Sumukhi", "gender" : "female", "dob" : "09-July-2004", "age" : 21}

if "age" in user and user["age"] >= 18:
    print("Adult")

is_logged_in = True
if is_logged_in:
    print("currently working")

if "gender" in user and user["gender"] == "male":
    print("None")
elif "name" in user and user["name"] == "Sumukhi":
    print("Keep smiling!")

a = 5
b = 7
c = 49
if a < b : print("hola!")
print("A") if a > b else print("B")
bigger = a if a > b else b
print(f"{bigger} is bigger value.")
print("A") if c ** 0.5 == a else print("B") if c ** 0.5 == b else print("Nothing Matches!")

age = 16

if age < 18:
  pass # TODO: Add underage logic later
else:
  print("Access granted")