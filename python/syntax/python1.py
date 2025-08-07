# print ("hello... world!")
# x = "hey"
# y = 'world'
# print (x, y)
# z = 50
# print (z)
# carname = "Volvo"
# print (carname)
# print ('Hey\'hellosup\'\tfdjh\nkfjbh')
# hello = "heyaaa"'\nbaby'
# print (hello)
# print (type (carname), "\n", type (z), "\n", type (x), "\n", type (y), "\n", type (x, y, z))
# my_var = 10
# print (my_var)
# myvar_ = 20
# print (myvar_)
# z = 50
# if z > 30:
#     print ("z is bigger than 30!")
#     print ("z is less than 30!")
# print ("z is not a fn")

# x = 29.9

# if x < 30:
#     print ("z is less than 30!")
# cls

# print (type(x), "\n", type(y), "\n", type(z))

# a = 10
# A = 100.03821
# x = str(30)
# y = "30"
# z = 30
# print (x, "\n", y, "\n", z)
# my__var = 30
# print (my__var)
# _myVar = 40
# print (_myVar)
# x, y, z = "Oreo", "reds", "ZEBRA"
# print (x, y, z)
# print (x)
# print (y)
# print (z)

# q = w = e = "oreo"
# print (q, w, e)


# fruits = ["apple", "banana", "gavava"] //list
# x, y, z  = fruits
# print (x, y, z)

# q, w, e = (50, 51, 52)
# print (q, w, e)

# xzz = "damn"

# def myfunc():
#     print(xzz)

# myfunc()    

# k = "wwe" #global var

# def newfunc():
#     k = "john cena" #local var
#     print (k) #calling local first then global

# newfunc()
# print (k) #calling global 

# def anotherOne():
#     global j
#     j = "ko"
#     # print (j)

# print ("Function closed")
# anotherOne()
# print (j)

# t = "motogp" 

# def onceAgain():
#     global t #one with the keyword 'global' will be priortised
#     t = "f1"

# onceAgain()
# print (t)

# import sys
# my_obj  = "Hello there"
# my_obj2 = "hey"
# size = sys.getsizeof(my_obj)
# print ("The size of my_obj: ")

# z = str(3)
# z = int(3)
# z = float(3)

# x = 10
# y = 2194835437698
# z = -3409385
# print ("x is: ", x, "\ny is: ", y, "\nz is: ", z)
# print ("x is of type: ", type(x), "\ny is of type: ", type(y), "\nz is of type: ", type(z))

# q = 11.9342
# w = 0.099275285
# e = -9.9843292
# m = 35e5
# n = -32.e34-2
# print ("q is: ", q, "\nw is: ", w, "\ne is: ", e)
# print ("q is of type: ", type(q), "\nw is of type: ", type(w), "\ne is of type: ", type(e), "\nm is of type: ", type(m), "\nn is of type: ", type(n))

# l = 10 + 20j
# o = 3.5 + 4.2j
# p = -5.6 - 7.8j
# print ("l is: ", l, "\no is: ", o, "\np is: ", p)
# print ("l is of type: ", type(l), "\no is of type: ", type(o), "\np is of type: ", type(p))


# a1 = float (y)
# b1 = int (n)
# c1 = complex (z)
# print ("a1 is: ", a1, "\nb1 is: ", b1, "\nc1 is: ", c1)
# print ("a1 is of type: ", type(a1), "\nb1 is of type: ", type(b1), "\nc1 is of type: ", type(c1))

# a11 = 3 + 4j
# print (int (a11.real), int (a11.imag), float (a11.real), float (a11.imag))

x = range(6)
print (x)

import random
print (random.randrange(1, 19))

x = 3
x = "johnny"
print (x)

y = "angel"
y = 5
print (y)

a = [1, 2, 4, 4, 3, 3, 3, 6, 5]
# Modifying an element in the list `a`
a[3] = 77
print(a)

# b = (0, 1, 2, 3)
# Attempting to modify a tuple
# b[0] = 4
# print(b)
# will be an error on output

print("It's alright")
print("He is called 'Johnny'")
print('He is called "Johnny"')
print('He is "called "Johnny"."')

uff = """koi chal aisi chalo ke ab ke 
samanderbhi pull pe chale, aaja aaja dill nichode, aaja aaja gullak to phodein!"""
print (uff)
print("\n")
ooteri = '''koi chal aisi chalo ke ab ke samanderbhi pull pe chale aaja aaja dill nichode, 
aaja aaja gullak to phodein!'''
print (ooteri)

senorita = "na main samjha, na main jaana, senorita"
print (senorita[3], senorita[5], senorita[7], senorita[9]) #will print character at that point, also consider spaces

for fruit in "banana":
    print(fruit) #print all characters in new line

masti = 'dill chahta hai!, kabhi na beetein chamkeele din'
print(len(masti))
print("dill" in masti)
print("delhi" in masti)
print("hamesha" not in masti)
if "beetein" in masti:
    print("It's in the string.")
if "baccha" not in masti:
    print("Nope, it's not.")

print(masti[0:3])
print(masti[0:12])
print(masti[18:])
print(masti[-21:-2])

srk = "challa"
print(srk.upper())

yrf = "KI LABHA DAA FIRE"
print(yrf.lower())

sid = '    bandook   '
print(sid.strip())

text = "\n\t Hello \t\n"
print(text.strip())   # 'Hello'
print(text.lstrip())  # 'Hello \t\n'
print("L")
print(text.rstrip())  # '\n\t Hello'


rk = "bachna aai haseeno"
print(rk.replace("b", "n"))
print(rk.replace("n", "h"))