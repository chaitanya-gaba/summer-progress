# Day 1
# print(complex((4+2)*6-1))
# print(round(7.1))
# print(7.1)
# b = ":"
# c = ")"
# s1 = b + 2*c
# print(s1)
# f = "a"
# g = " b"
# h = "3"
# s2 = (f + g)*int(h)
# # a b3
# print(s2)

# tst = input("Enter any thing: ")
# print(5*(tst + " "))
# print((tst.capitalize()+" ")*5)
# print((tst.upper()+" ")*5)


# verb = input("Enter any verb: ")
# times = int(input("Enter the amount of times you want to print: "))
# print(f"I can {verb} better than you.")
# print(f"{verb} "*(times-1)+f"{verb}.\nk")

#Sq Root
# class Root:
#     def __init__(self, x):
#         self.x = x

#     def square_root(self):
#         guess = self.x / 2
#         for _ in range(10):
#             guess = (guess + self.x / guess) / 2
#         return guess

# x = 25
# r = Root(x)
# print("Square root of", x, "is", r.square_root())


# class CubeRoot:
#     def __init__(self, x):
#         self.x = x

#     def cube_root(self):
#         guess = self.x / 3
#         for _ in range(10):
#             guess = (2 * guess + self.x / (guess ** 2)) / 3
#         return guess

# x = 271
# c = CubeRoot(x)
# print("Cube root of", x, "is", c.cube_root())

# #Iter
# mytuple = ["apple", "banana", "kiwi"]
# myitr = iter(mytuple)
# print(next(myitr))
# print(next(myitr))
# print(next(myitr))
# for x in mytuple:
#     print(x)
# mytuple1 = "Cherry"
# myitr1 = iter(mytuple1)
# print(next(myitr1))
# print(next(myitr1))
# print(next(myitr1))
# print(next(myitr1))
# print(next(myitr1))
# print(next(myitr1))
# for x in mytuple1:
#     print(x)

# #Factorial
# x = int(input("Enter the nmuber for factorialisation: "))
# i = x
# factor = 1
# while i >= 1:
#     factor *= i
#     i -= 1

# print(factor)

# x = int(input("Enter the number for factorialisation: "))
# factor = 1

# for i in range(x, 0, -1):
#     factor *= i

# print(factor)
# Addition of 3 and 4: Basically adding 4 times 1 in 3 and vice-versa
# -> incrementing the bit, left shift
# Subtraction of 12 from 36: decrementation of 36, 12 times by 1
# decrementing the bit, right shift
# Multiplication of 3 and 4: 4 times addition of 3
# Devide 9 by 3: subtracting 3 from 9 till we get 0, the times we did the subtraction is our quotient

# 8th July 2025

# s = "abc"
# x = s[len(s) - 1]
# print (x)
# print(s[2])

# str = "loren-ipsum"
# print(str[2:8:2])
# print(str[12:2:-1])
# print(str[11:6:-1])
# print(str[-1])

# Newton - Raphson
# x = int(input("Enter the number 'x' whose square root you want to find: "))
# guess = int(input("Enter the number from you want to start guessing: "))
# cube = print(f"Square of given number {guess} is: ", guess**2)
# i = 1
# # for perfect squares only
# if x - guess**2 == 0:
#     print(f"{guess} is the square root of {x}")
# else:
#     while x != guess**2:
#         next_guess = guess - ((guess**2 - x)/(2*guess))
#         guess = next_guess
#         print(guess, f"Iteration Stage: {i}")
#         i += 1
#     print(f"Perfect square root for {x} is {int(guess)}.")

# for every sqrt
# num = int(input("Enter the number whose square-root you want to find: "))
# guess = int(input("Enter the numebr from you want to start guessing: "))
# tolerance = 1e-6
# while abs(guess**2 - num) > tolerance:
#     next_guess = guess - ((guess**2 - num) / (2*guess))
#     print(next_guess)
#     guess = next_guess

# Cube Root
# num = float(int(input("Enter the numbe you want to find cube root of: ")))
# guess = float(int(input("Enter the from which you want to verify: ")))
# tolerance = 1e-6
# if num == 0 or guess == 0:
#     print("0 input is an error, function will not work.")
# else:
#     while abs(guess**3 - num) > tolerance:
#         next_guess = guess - ((guess**3 - num)/(3*(guess**2)))
#         guess = next_guess
#         print(guess)

# import math
# number = int(input("Enter any number: "))
# root = int(input("Enter 2 for sqrt and 3 cube-root: "))
# if root == 2:
#     print(f"Square root of {number} is : ", math.sqrt(number))
#     print(f"Sqaure root of {number} is : ", number**(1/2))
# elif root == 3:
#     print(f"Cube root of {number} is : ", number**(1/3))
# else:
#     print("Invalid input")

# print((2>3) and (4<5))
# print((2>3) or (4<5))
# print(not(2>3))
# number = int(input("Please enter any number: "))

# num1 = float(input("Enter any number: "))
# num2 = float(input('Enter another number: '))
# if num1 == num2:
#     print('Both number are equal!')

# secret_num = float(input("Enter any number which will be a secret b/w us: "))
# guess = float(input("Guess a number: "))
# if guess == secret_num:
#     print("Your guessed number is equal to secret number!")
# elif guess > secret_num:
#     print("Your guessed number is greater than secret number.")
# else:
#     print("Your guessed number is less than secret number.")

# where = input("Enter direction where you want to move: ")
# where = where.lower()
# while where == "right":
#     print("You're still lost in the forest!")
#     where = input('Left or Right?')
# print('You are out of the forest!')

# numbers = [1, -2, 3, -4, 5, 6, -7, -8, 9, 10]
# positive_number_count = 0
# number_count = 0
# for x in numbers:
#     print(x)
#     number_count += 1
# for num in numbers:
#     if num > 0:
#         positive_number_count += 1
# print(f"Total number of elemtents in the list: {number_count}")   
# print(positive_number_count)

# n = int(input("Enter till where you want to add: "))
# sum = 0
# for x in range(2, n, 2):
#     sum += x
# print(f"Sum of even numbers in the given rage is: {sum}")
# sum = x = 0
# for x in range(1, n, 2):
#     sum += x
# print(f"Sum of odd numbers in the given rage is: {sum}")

# table = int(input("Enter number whose table you want to print: "))
# for x in range(1, 11):
#     if x == 5:
#         continue
#     else :
#         print(f"{table} x {x}.", table * x)

# string_user = input("Enter any string: ")
# reversed_str = ""
# for x in string_user[::-1]:
#     #print(x)
#     reversed_str = x + reversed_str
# print(reversed_str)
# print("In same line : ", string_user[::-1])

# input_str = "hola amigo, kaise ho theek ho?"
# print(input_str.count("?", 1, 30))

# fact = int(input("Enter any number: "))
# i = 1
# factorial = 1
# while i <=fact:
#     factorial *= i
#     i += 1
# print(factorial)

# i = 1
# while i == 1:
#     k = float(input("Enter number: "))
#     if 1 <= k <= 10:
#         break

# prime_check = int(input("Enter any number you want to check for being prime: "))
# is_true = True
# if prime_check > 1:
#     for x in range(2, prime_check):
#         if prime_check % x == 0:
#             print("Not a prime number.")
#             is_true = False
#             break
#         elif is_true == False:
#             print("It's a prime number.")

# basket = ["apple", "samsung", "dell", "lenovo", "asus", "dell", "samsung", "m4", "s24"]
# unique = set()
# duplicate = set()
# for item in basket:
#     if item in unique:
#         print("Duplicate: ", item)
#         duplicate.add(item)
#     else:
#         unique.add(item)
# print('Unique items: ', unique)
# print('Duplicate items: ', duplicate)

# back-off
# import time
# wait_time = 2
# max_tries = 5
# attempts = 0
# current_time = time.localtime()
# while attempts < max_tries:
#     attempts += 1
#     wait_time *= 2
#     current_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
    
#     print(f"Attempt: {attempts}  Wait: {wait_time} Current Time : {current_time}")
#     time.sleep(wait_time)

# myNewList = [1, 2, 3, 4, 5, 9]
# my_iterator = iter(myNewList)
# print(my_iterator)
# print(next(my_iterator))
# print(next(my_iterator))
# print(next(my_iterator))
# print(next(my_iterator))
# print(next(my_iterator))
# print(next(my_iterator))

# 9th July, 2025

# number = float(input("Enter the number whose square root you want to find: "))
# guess = float(input("Enter any number from which you want to start guessing: "))
# low = 0
# high = number
# tolerance = 1e-6
# guess_counter = 0

# if guess**2 > number:
#     print(f"{guess} is too high.")
# elif guess**2 < number:
#     print(f"{guess} is too low.")
# elif guess**2 == number:
#     print(f"{guess} is the sqaure root of {number}.")
#     exit()

# while abs(guess**2-number) > tolerance:
#     if (guess**2 > number):
#         high = guess
#     else:
#         low = guess
#     guess = (low+high)/2.0
#     guess_counter += 1
# print(f"Estimated square root of {number} is {guess}")
# print(f"Total guesses: {guess_counter}")

# def if_even(number):
#     if number % 2 == 0:
#         print(f"{number} is even.")
#     else:
#         print(f"{number} is odd.")

# number = int(input("Enter any number: "))
# if_even(number)

# if_ev = lambda number : number % 2 == 0
# print(if_ev(19))

# add = lambda a, b: a+b
# print(add(3, 7))

# a = (5)
# b = (5,)
# print(type(a))
# print(type(b))
# c = (8, 6, 5, 3, 56, 5)
# b = b+c
# print(b)
# print(b[1:6:2])

# my_tuple = (2, "dofej", 32, 23)
# print(type(my_tuple))
# print(my_tuple)
# print(my_tuple)
# print(my_tuple[0:2:1])

# Swap
# a = (1, 4, 6, 9, "hola")
# b = (234, 234236, "amigo", "erectile")
# (a, b) = (b, a)
# print(a)
# print(b)

# def quotient_and_remainder(x, y):
#     p = x // y
#     q = x % y
#     return(p, q)
# x = int(input("Enter any number: "))
# y = int(input("Enter another number: "))
# #quotient_and_remainder(x, y)

# result = quotient_and_remainder(x, y)
# print(result[0], result[1])

# elements = int(input("Enter size: "))
# my_tuple = []
# for x in range(elements):
#     val = input(f"Enter element {x + 1}:")
#     my_tuple.append(val)
# my_tuple = tuple(my_tuple)
# print("Your Tuple: ", my_tuple)

# def if_max(my_list):
#     max_val = 0 
#     for i in my_list:
#         if i > max_val:
#             max_val = i
#     return max_val


# size = int(input("Enter the size for you list: "))
# my_list = []
# for x in range(size):
#     x = int(input(f"Enter element {x + 1}: "))
#     my_list.append(x)
# print("Your list: ", my_list)

# result = if_max(my_list)
# print(result, "is the biggest number in you lsit.")

# # Using built-in max() function to find the biggest number
# print(max(my_list), "is the biggest number in your list using max().")

# size = int(input("Enter the size for you list: "))
# my_list = []
# for x in range(size):
#     x = input(f"Enter element {x + 1}: ")
#     my_list.append(x)
# print("Your list: ", my_list)
# sorted_list = sorted(my_list)
# print(sorted_list)
# reversed_list = list(reversed(my_list))
# print(reversed_list)

#10th July 2025
# my_list = ["m4", "whoop", "galaxy watch ultra", "s24", "guirilla 450"]
# for x in my_list:
#     print(x)
# my_list[1] = "Whoop 5.0"
# my_list[0] = "m4 512 gb"
# my_list.append("cmf 65w charger")
# for x in my_list:
#     print(x)
# my_list2 = ["action pro 5", "ps5", "wwe 2k25", "nintendo switch 2.0"]
# my_new_list = my_list + my_list2
# for x in my_new_list:
#     print(x)
# size = int(input("Enter the size of you list: "))

# my_list = []
# for x in range(size):
#     element = input(f"Enter element {x+1}: ")
#     my_list.append(element)
# print(my_list)