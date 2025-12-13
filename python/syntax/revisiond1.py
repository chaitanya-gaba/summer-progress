print("Hello World")

# identation
if 5 > 2:
    print("Yes")

x = 5
y = "Hey"

print("Hello", end=" ")
print("Hola")

print(3 + 2, 3 * 2)

x = 35
print(f"Your age is: {x}")

x = 35
y = "John Cena"
z = float(3)
a = complex(9)
print(type(x), type(y), z, a)

name = "John" """is same as"""; name = 'John'

A = "Sally"
print(a, A)

# variables
myvar = 1
myVar = 1
my_var = 1
_myvar = 1
_my_var = 1
myvar1 = 1
MYVAR = 1

x, y, z = "orrenge", "apple","banana"
print(x, y, z)
print(x + y + z)

x = y = z = "pineapple"
print(x, y, z)

fruits = ("pineapple", "apple", "litchi")
x, y, z = fruits
print(x, y, z)

# Global
x = "awesome"
def myfunc():
    print("Have a", x, "day.")
myfunc()

def myfunc1():
    x = "fantastic"
    print("Have  a", x, "day.")
myfunc1()
myfunc()

k = "kanu"
print(k)
def myfunc2():
    global k 
    k = "shanti"
    print(k)
myfunc2()
print(k)

list = ["element1", "element2", "element3"]
tuple = ("tuple1", "tuple2", "tuple3")
dict = {"name":"john", "lastname":"cena"}

name = "Captain Jack Sparrow"
print(name[1])
print(name[2:8:2])
for x in name:
    print(x)
print(len(name))
if "Jack" in name:
    print("Captain Sparrow")
if "new" not in name:
    print("Waiting for Jack Sparrow")
print(name[::-1])
newname = name.upper()
print(newname)
print(name.lower())
extra = " extra spaces "
print(extra.strip())
print(extra.replace("s", "H"))
print(extra.split("t"))
print(extra.capitalize())

# string methods
text = "  Hello World  "

print("Original:", repr(text))

# Case methods
print("capitalize():", text.capitalize())
print("casefold():", text.casefold())
print("lower():", text.lower())
print("upper():", text.upper())
print("swapcase():", text.swapcase())
print("title():", text.title())

# Alignment methods
print("center(20, '*'):", text.center(20, '*'))
print("ljust(20, '*'):", text.ljust(20, '*'))
print("rjust(20, '*'):", text.rjust(20, '*'))

# Search & count
print("count('l'):", text.count('l'))
print("find('World'):", text.find("World"))
print("rfind('l'):", text.rfind('l'))
print("startswith('  He'):", text.startswith("  He"))
print("endswith('  '):", text.endswith("  "))

# Replace & split
print("replace('World','Python'):", text.replace("World", "Python"))
print("split():", text.split())
print("rsplit(' ',1):", text.rsplit(" ", 1))
print("partition('World'):", text.partition("World"))
print("rpartition('l'):", text.rpartition("l"))

# Trim spaces
print("strip():", text.strip())
print("lstrip():", text.lstrip())
print("rstrip():", text.rstrip())

# String tests
print("isalnum():", "Hello123".isalnum())
print("isalpha():", "Hello".isalpha())
print("isdigit():", "123".isdigit())
print("isdecimal():", "123".isdecimal())
print("isnumeric():", "123".isnumeric())
print("islower():", "hello".islower())
print("isupper():", "HELLO".isupper())
print("isspace():", "   ".isspace())
print("istitle():", "Hello World".istitle())
print("isascii():", "Hello".isascii())
print("isidentifier():", "my_var".isidentifier())
print("isprintable():", text.isprintable())

# Join
print("join():", "-".join(["A", "B", "C"]))

# Tabs & lines
print("expandtabs(4):", "A\tB".expandtabs(4))
print("splitlines():", "A\nB\nC".splitlines())

# Formatting
print("format():", "My name is {}".format("John"))
print("format_map():", "{x} + {y}".format_map({"x": 5, "y": 10}))

# Translate
table = str.maketrans("aeiou", "12345")
print("translate():", "hello".translate(table))

# Zero fill
print("zfill(6):", "99".zfill(6))

# Encode
print("encode():", "Hello".encode("utf-8"))

num1 = 10
num2 = 3

print("num1 =", num1)
print("num2 =", num2)

# Addition
print("Addition (num1 + num2):", num1 + num2)

# Subtraction
print("Subtraction (num1 - num2):", num1 - num2)

# Multiplication
print("Multiplication (num1 * num2):", num1 * num2)

# Division
print("Division (num1 / num2):", num1 / num2)

# Modulus
print("Modulus (num1 % num2):", num1 % num2)

# Exponentiation
print("Exponentiation (num1 ** num2):", num1 ** num2)

# Floor Division
print("Floor Division (num1 // num2):", num1 // num2)

# Basic assignment
num3 = 21
print("= :", num3)

# Add and assign
num3 += 3
print("+= :", num3)

# Subtract and assign
num3 -= 3
print("-= :", num3)

# Multiply and assign
num3 *= 3
print("*= :", num3)

# Divide and assign
num3 /= 3
print("/= :", num3)

# Modulus and assign
num3 %= 14
print("%= :", num3)

# Floor divide and assign
num3 //= 3
print("//= :", num3)

# Exponent and assign
num3 **= 3
print("**= :", num3)

# Reset num3 for bitwise examples
num3 = 5

# Bitwise AND assign
num3 &= 3
print("&= :", num3)

# Bitwise OR assign
num3 |= 3
print("|= :", num3)

# Bitwise XOR assign
num3 ^= 3
print("^= :", num3)

# Right shift assign
num3 >>= 1
print(">>= :", num3)

# Left shift assign
num3 <<= 2
print("<<= :", num3)

# Walrus operator (:=)
print(":= :", (num3 := 3))
print("num3 after walrus:", num3)