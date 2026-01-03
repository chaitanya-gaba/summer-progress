# OOPs
class class_kaNaam:
    def __init__(self, name, age):
        self.name = name # self.name current object ka variable, name data jo neeche se aaya hai.
        self.age = age

object_kaNaam = class_kaNaam("Ojas", 12) #class_kaNaam() yahan par class se object bana rahe hain
print(object_kaNaam.name)

# object_kaNaam.method() ko python internally class_kaNaam.method(object_kaNaam) aise read karta hai.


class car:
    def __init__(self, brand, price):
        self.brand = brand
        self.name = price

c1 = car("Fiat", 98000)
print(c1.brand)


class car:
    def __init__(self, brand, name):
        self.brand = brand
        self.name = name

    def drive(self):
        print(f"{self.brand} is a great car driven by {self.name}")

c2 = car("Mini Cooper", "Gaba")
print(c2.brand)
c2.drive()

class animal:
    def __init__(self, animal_name):
        self.animal_name = animal_name

    def sound(self):
        print(f"{self.animal_name} is shouting.")

class dog(animal):
    pass

d1 = dog("bruno")
d1.sound()

class Person:
    def __init__(self, fname, lname):
        self.fname = fname
        self.lname = lname

    def printname(self):
        print(f"{self.lname}, {self.fname}")

class Student(Person):
    def __init__(self, fname, lname, uid):
        super().__init__(fname, lname)
        self.uid = uid

    def welcome(self):
        print(f"Hello {self.lname}, {self.fname} to the university. Your UID is: - {self.uid}.")

class Teacher(Person):
    def __init__(self, fname, lname, eid):
        super().__init__(fname, lname)
        self.eid = eid

    def WelcomeEmployee(self):
        print(f"{self.lname}, {self.fname} we welcome you to the family. You Employee ID is: - {self.eid}")

d1 = Student("Ojas", "Gaba", 15984)
d2 = Teacher("Lomanshi", "Malhotra", 12002)
d1.Welcome()
d2.WelcomeEmployee()

class Animal:
    def __init__(self, breed):
        self.breed = breed

    def sound(self):
        pass

class Dog(Animal):
    def __init__(self, breed, dog_breed):
        super().__init__(breed)
        self.dog_breed = dog_breed

    # this right here is overriding as we are using the same function (with different attribute), which was used above also.
    def sound(self):
        print(f"{self.dog_breed} is barking!")

a1 = Dog("Pug", "Vodafone wala Kutta")
a1.sound()

class Account:
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance

class SavingsAccount(Account):
    def __init__(self, name, balance, interest_rate):
        super().__init__(name, balance)
        self.interest_rate = interest_rate

    def show_details(self):
        print(f"{self.name} will get interest rate of {self.interest_rate} for balance: - {self.balance} in the account.")

a1 = SavingsAccount("Mohit", 39543576941, "12.9%")
a1.show_details()

class Person:
    def __init__(self, name):
        self.name = name

class Employee(Person):
    def __init__(self, name, department):
        super().__init__(name)
        self.department = department

class Manager(Employee):
    def __init__(self, name, department, role):
        super().__init__(name, department)
        self.role = role

    def work(self):
        print(f"{self.name} works in {self.department} department with speciality in {self.role}.")

p1 = Manager("Akshat", "Sales", "Credit")
p1.work()

# polymorphism
class car:
    def __init__(self, name):
        self.car_name = name
    
    def move(self):
        print(f"{self.car_name} is amazing sedan.")

class bike:
    def __init__(self, name):
        self.bike_name = name

    def move(self):
        print(f"{self.bike_name} is great for off-road riders.")

c1 = car("Honda")
b1 = bike("Guirilla 450")
c1.move()
b1.move()

class Employee:
    def __init__(self, salary):
        self.salary = salary

    def get_salary(self):
        print(f"You are earning: - {self.salary}")

class Manager(Employee):
    def __init__(self, salary):
        super().__init__(salary)

    def get_salary(self):
        print(f"Manager is earning: - {self.salary}")

class Developer(Employee):
    def __init__(self, salary):
        super().__init__(salary)

    def get_salary(self):
        print(f"Developer is earning: - {self.salary}")

call = [Manager(59000), Developer(990000)]
for emp in call:
    emp.get_salary()

# encapsulation
class book:
    def __init__(self, price, name):
        self.__price = price
        self.name = name

    def get_price(self):
        print(f"{self.name} is a priced at: {self.__price}.")

    def set_price(self, new_price):
        if new_price > 0:
            new_price += self.__price
            print(f"New price is {new_price}")
        else:
            pass

b1 = book(1200, "Philosopher's Stone")
b1.get_price()
b1.set_price(1900)
b1.get_price()