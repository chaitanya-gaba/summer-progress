cars = ["volvo", "fiat", "mini-cooper", "ferrari", "amg"]
print(cars[0])
cars.append("Toyota")
print(cars)
print(len(cars))
for x in cars:
    print(x)
cars.pop(5)
cars.remove("amg")
cars.insert(4, "amg")
print(cars)
cars.reverse()
print(cars)
cars.sort()
print(cars)

import datetime
print(datetime.date.today())
print(datetime.datetime.now())
print(datetime.datetime.now().time())
print(datetime.datetime.now().time().strftime("%H:%M"))
print(datetime.datetime.now().time().strftime("%I:%M %p"))
print(datetime.datetime.today().year)
print(datetime.datetime.today().strftime("%A"))
custom = datetime.datetime(2020, 5, 27)
print(custom)

import datetime

# Create a sample datetime object
dt = datetime.datetime.now()

print("Weekday short        :", dt.strftime("%a"))
print("Weekday full         :", dt.strftime("%A"))
print("Weekday number (0-6) :", dt.strftime("%w"))
print("Day of month         :", dt.strftime("%d"))

print("Month short          :", dt.strftime("%b"))
print("Month full           :", dt.strftime("%B"))
print("Month number         :", dt.strftime("%m"))

print("Year short           :", dt.strftime("%y"))
print("Year full            :", dt.strftime("%Y"))
print("Century              :", dt.strftime("%C"))

print("Hour (24-hour)       :", dt.strftime("%H"))
print("Hour (12-hour)       :", dt.strftime("%I"))
print("AM / PM              :", dt.strftime("%p"))

print("Minute               :", dt.strftime("%M"))
print("Second               :", dt.strftime("%S"))
print("Microsecond          :", dt.strftime("%f"))

print("UTC offset           :", dt.strftime("%z"))
print("Timezone name        :", dt.strftime("%Z"))

print("Day of year          :", dt.strftime("%j"))
print("Week number (Sun)    :", dt.strftime("%U"))
print("Week number (Mon)    :", dt.strftime("%W"))

print("Local date & time    :", dt.strftime("%c"))
print("Local date           :", dt.strftime("%x"))
print("Local time           :", dt.strftime("%X"))

print("Literal %            :", dt.strftime("%%"))

print("ISO year             :", dt.strftime("%G"))
print("ISO weekday (1-7)    :", dt.strftime("%u"))
print("ISO week number      :", dt.strftime("%V"))

import json

data = {"name":"John Lark", "age":31, "city":"Paris"}

# 1. Python Object to JSON String
json_str = json.dumps(data)
print("JSON String: ", json_str)

# 2. JSON String to Python Object
data_back = json.loads(json_str)
print("Python Dict: ", data_back)

# 3. Python Object to JSON File
with open("data.json", "w") as f:
    json.dump(data, f, indent=4)

# try - except - else - finally
try:
    num = int(input("Enter any number: "))
    print("You've entered: ", num)
except ValueError:
    print("Please enter integer!")

try:
    a = int(input("Enter any number: "))
    b = int(input("Enter another number: "))
    dev = a / b
except ValueError:
    print("Please enter correct value in integer!")
except ZeroDivisionError:
    print("Can't devide anything from 0.")
else:
    print("Result: ", dev)
finally:
    print("Closing the program!")

# try: - risky code, where error could happen
# except: - handles errors
# else: - runs only if there is no error
# finally: - will always runs doesn't matter if there was error or not

def myfunc():
    x = 5
    # return x

x = myfunc()
print(x)