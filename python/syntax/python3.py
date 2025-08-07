# # July 1st, 2025
# x = "dope boy"
# print (x.split("e"))

# y = 22
# print(f"Carlos Alcaraz is {y} old.")

# age = 22.6764548769
# print(f"Chaitanya is {age:.7f} old.")

# txt = f"The price is {29*32} for this article."
# print(txt)

# txt1 = "The price is 'Right'"
# print(txt1)

# txt2 = "The Price is \"Right\""
# print(txt2)

# txt3 = "It\'s alright/"
# print(txt3)

# txt4 = "This will insert {one backslash} \\"
# print(txt4)

# #A backslash followed by three integers will result in a octal value:
# txt = "\110\145\154\154\153\164\n\154\155\156\157\158\159\160\161\162\163"
# print(txt) 

# burra = "ookjblkjz\fejgbh"
# print(burra)

# burra = "ookjblkjz\nejgbh"
# print(burra)

# #A backslash followed by an 'x' and a hex number represents a hex value:
# txt = "\x48\x65\x6c\x6c\x6f"
# print(txt) 

# print(19 > 10)
# print(19 == 10)
# print(19 < 10)

# print(bool("Helo"))
# print(bool(156))

# print(bool(""))
# print(bool(0))

# ooe = 500
# print(isinstance(ooe, int))
# print(isinstance(ooe, str))

# duh = "max verstappen"
# print(isinstance(duh, str))

# print(2 * 5 + 9)
# print(11 % 5)
# print(3^3)
# print(3 ** 3)
# print(15 // 4)
# print(15/4)

# i = 1
# while i <= 5:
#     z = 14
#     z += i
#     print(z)
#     i+=1

# i = 1
# while i <= 5:
#     z = 14
#     z *= i
#     print(z)
#     i+=1

# i = 1
# while i <= 5:
#     z = 14
#     z -= i
#     print(z)
#     i+=1

# i = 1
# while i <= 5:
#     z = 14
#     z %= i
#     print(z)
#     i+=1

# i = 1
# while i <= 5:
#     z = 14
#     z //= i
#     print(z)
#     i+=1

# i = 1
# while i <= 5:
#     z = 14
#     z /= i
#     print(z)
#     i+=1

# i = 1
# while i <= 5:
#     z = 14
#     z **= i
#     print(z)
#     i+=1

# i = 1
# while i <= 5:
#     z = 14
#     z &= i
#     print(z)
#     i+=1

# i = 1
# while i <= 5:
#     z = 14
#     z |= i
#     print(z)
#     i+=1

# i = 1
# while i <= 5:
#     z = 14
#     z ^= i
#     print(z)
#     i+=1

# i = 1
# while i <= 5:
#     z = 14
#     z <<= i
#     print(z)
#     i+=1

# i = 1
# while i <= 5:
#     z = 14
#     z >>= i
#     print(z)
#     i+=1

# month = 5
# day = 4
# match day:
#   case 1 | 2 | 3 | 4 | 5 if month == 4:
#     print("A weekday in April")
#   case 1 | 2 | 3 | 4 | 5 if month == 5:
#     print("A weekday in May")
#   case _:
#     print("No match")

# z = 2
# for x in range(z, 7):
#    print(x)

# for x in range(2, 36, 4):
#    print(x)

# def my_function(fname):
#   print(fname + " Refsnes")

# my_function("Emil")
# my_function("Tobias")
# my_function("Linus")

# def my_function(fname, lname):
#   print(fname + " " + lname)

# my_function("Emil", "Refsnes")


# def my_function(*kids):
#   print("The youngest child is " + kids[2])

# my_function("Emil", "Tobias", "Linus")

cars = ["McLaren", "Aston Martin", "Red Bull", "Ferrari", "Mercedes"]
print(cars)
print(cars[0], cars[2])
print(len(cars))

for x in cars:
   print(x)
#in above 1st i tried to to use cars as another variable it was working fine, but do need to check

cars = ["McLaren", "Aston Martin", "Red Bull", "Ferrari", "Mercedes"]
cars.append("Lemborgini")
print(cars)
print(cars[5])

print(cars.pop(5), "Popped from List") #why () and not []
print(cars)

print(cars.append("Lemborgini"))
print(cars)
cars.remove("Lemborgini")
print(cars)

f1 = cars.copy()
print("New List for f1: ", f1)
for xz in f1:
   print(xz)

print(cars.clear())
print(f1)
print(f1.count("Ferrari"))

drivers = ["Max Verstappen", "Louis hamilton", "Lelerc"]

f1.extend(drivers)
print(f1)

print(drivers.index("Lelerc"))
f1.insert(5, "Alpine Renault")
print(f1)
f1.remove("Lelerc")
f1.pop(4)
print(f1)

f1.reverse()
print(f1)

f1.sort()
print(f1)