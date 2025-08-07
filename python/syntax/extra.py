x = 9
lambda x : x+2
print(x)

x = []
print(bool(x))
x = 1
print(bool(x))
x = ""
print(bool(x))
x = "-"
print(bool(x))
x = 9 + 3j
print(bool(x), "hola")
y = 22 + 6J
print(x+y)
real_part = 10
img_part = 19
my_complex_number = complex(real_part, img_part)
print(my_complex_number)

print(bool(0))        # Output: False
print(bool(100))      # Output: True
print(bool(""))       # Output: False
print(bool("hello"))  # Output: True
print(bool([]))       # Output: False
print(bool([1, 2]))   # Output: True
print(bool(None))     # Output: False

year = int(input("Enter the year you want to check for: "))
if (year%4 == 0 and year%100 != 0) or year%400 == 0:
    print(f"{year} is a leap year.")
else:
    print(f"{year} is not a leap year.")