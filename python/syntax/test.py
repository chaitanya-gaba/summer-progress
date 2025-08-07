#1st
# students = {
#     "Ojas" : {
#         "English" : 95,
#         "Hindi" : 90,
#         "Computor" : 98
#     },
#     "Kanush" : {
#         "English" : 3,
#         "Hindi" : 4,
#         "Computor" : 5
#     },
#     "Jashan" : {
#         "English" : 92,
#         "Hindi" : 95,
#         "Computor" : 99
#     }
# }
# # print(students["Ojas"]["Computor"])
# for x in students.keys():
#     print(x)
#     avg = (students.get("English"))
#     print(avg)

##2nd
# my_list = []
# size = int(input("Enter the size of list: "))
# for x in range(size):
#     user = input("Enter item for the list: ")
#     my_list.append(user)
# print("Your list: ", my_list)

# sorted = sorted(my_list)
# reversed = list(reversed(my_list))
# print("Sorted List: ", sorted)
# print("Reversed List: ", reversed)
# unique = set()
# duplicate = set()
# for item in my_list:
#     if item in unique:
#         duplicate.add(item)
#     else:
#         unique.add(item)
# print("Unique elements in you list: ", unique)
# print("Duplicate elements in your list: ", duplicate)

# # 3rd
# class Employee():
#     def __init__(self, name, department, salary):
#         self.name = name
#         self.department = department
#         self.__salary = salary

#     def salary(self):
#         return (f"{self.__salary}")

# class Developer(Employee):
#     def __init__(self, name, department, salary, project):
#         super().__init__(name, department, salary)
#         self.__project = project

#     def proj(self):
#         return (f"{self.__project}")

#     def full_info(self):
#         return (f"{self.name} is {self.department} working on {self.__project} for Rs. {self.salary()}")

# d1 = Developer("Ojas", "Intern", 16000, "Roblox")
# d2 = Developer("Kanush", "RnD", 10000, "Grow a Garden")
# d3 = Developer("Chaitanya", "SDE", 19000, "findr")

# print(d1.name) # working
# print(d2.proj())
# print(d3.full_info())

## 4th
# class Vehicle:
#     def __init__(self, brand, model):
#         self.brand = brand
#         self.model = model
    
# class ElectricCar(Vehicle):
#     def __init__(self, brand, model, batteryRange):
#         super().__init__(brand, model)
#         self.__batteryRange = batteryRange

#     def range(self):
#         return (f"{self.__batteryRange}")

#     def fullInfo(self):
#         return (f"{self.model} is car from {self.brand} comapny which gives a range of {self.__batteryRange}")
    
# c1 = ElectricCar("Tata", "Curvv", "300KM")
# c2 = ElectricCar("Mahindra", "BE-6", "270KM")
# c3 = ElectricCar("Tesla", "Cyber Truck", "350KM")
# print(c1.fullInfo())
# print(c2.brand)
# print(c3.range())

## 5th
# user_Inputstring = input("Enter any string: ")
# print(user_Inputstring)
# reversed_UserString = user_Inputstring[::-1]
# print(reversed_UserString)
# for x in 

##6th
# number = int(input("Enter a number till you want to find total prime numbers inside range(integer only!): "))

# if number <= 0:
#     print(f"{number} is invalid input.")

# elif number < 2:
#     print(f"{number} is a prime number")

# for x in range(number+1):
#     for i in range(x+1):
#         if x % i == 0:
#             continue
#         else:
#             print(f"{number} is a prime number.")

##7th
# number = float(input("Enter a number whose square root you want to find: "))
# guess = float(input(f"Guess a number which could be sqaure root of {int(number)}: "))
# low = 0
# maxRange = number
# tolerance = 1e-6
# check = 1
# if guess**2 == number:
#     print(f"{guess} is square root of {int(number)}.")
# while abs(guess**2 - number) > tolerance:
#     if guess**2 > number:
#         maxRange = guess
#         guess = (maxRange + low) / 2
#     elif guess**2 < number:
#         low = guess
#         guess = (maxRange + low) / 2
#     print(f"{guess} is not a square root of {int(number)}, Case Number: {check}")
#     check += 1
# print(f"{guess} is the square root of {int(number)}.")

##8th
# size = int(input("Enter the size of your list: "))
# random_list = []
# for x in range(size):
#     num = float(input(f"Enter element {x+1}: "))
#     random_list.append(num)
# print(random_list)
# for x in random_list:
#     p = lambda x : x%2==0
#     print(f"{p} is a prime number.")

##9th
# class factorial:
#     def __init__(self, number):
#         x = 1
#         while x <= number:
#             fact *= x
#             x += 1
#             print(f"At stage {x} it is: {fact}")
#         return fact
        
# number = int(input("Enter the number whose factorial you want to find: "))
# o1 = factorial(number)
# fact = int(o1)
# print(f"Factorial of {number} is {fact}.")

##10th
tapri_chai = {"Masala Chai" : 10, "Adrak Chai": 10, "Masala - Adrak Chai": 15, "Tulsi Chai": 15, "Rose Chai": 30}
print(tapri_chai)
tapri_nashta = {"maska bun": 15, "parle-g": 5, "bada parle-g": 10, "simple paratha": 20}
print(tapri_nashta)
