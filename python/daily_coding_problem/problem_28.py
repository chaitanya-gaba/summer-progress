'''
Write a Python program that takes a number as input and checks:

If the number is positive, then check whether it is even or odd.

If the number is zero, print that the number is zero.

If the number is negative, print that the number is negative.
'''
try:
    n = int(input("Enter any number: - "))
except ValueError:
    print("Invalid input.")
if n > 0:
    print(f"{n} is positive.")
    if n % 2 == 0:
        print(f"{n} is even.")
    else:
        print(f"{n} is odd.")

elif n == 0:
    print("Number is 0.")

elif n < 0:
    print(f"{n} is negative")