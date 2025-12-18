'''
Write a Python program that:

Takes an integer n

Checks the following conditions:

If n is divisible by both 3 and 5, print "FizzBuzz"

Else if n is divisible by only 3, print "Fizz"

Else if n is divisible by only 5, print "Buzz"

Otherwise, print "Not divisible by 3 or 5"
'''
try:
    n = int(input("Enter any integer: - "))
    print("You entered: - ")
except ValueError:
    print("Invalid input from user.")

if n % 3 == 0 and n % 5 == 0 :
    print("FIzzBuzz")
elif n % 3 == 0:
    print("Fizz")
elif n % 5 == 0:
    print("Buzz")
else:
    print("!")