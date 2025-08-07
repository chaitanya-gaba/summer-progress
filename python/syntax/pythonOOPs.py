#July 3rd 2025
'''
class Engine():
    def __init__(self, engine):
        self.__engine = engine

    def get_brand(self):
        return self.__engine

class f1(Engine):
    def __init__ (self, driver, team, engine):
        super().__init__(engine)
        self.driver = driver
        self.team = team

    def get_brand(self):
        return super().get_brand() + " !"

    def fullName(self):
        return f"{self.driver} | {self.team} | Engine: {super().get_brand()}"
    
d1 = f1("Hammilton", "Scuderia Ferrari", "Ferrari")
d2 = f1("Verstappen", "Red Bull", "Honda")
d3 = f1("Norris", "McLaren", "Mercedes-AMG")

print(d1.driver)
print(d2.driver, d2.team)
print(d3.fullName())
print(d3.get_brand())
'''
'''
# Scenario 1
class Vehicle:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def vehicle_info(self):
        return f"{self.model} {self.brand}"

class Car(Vehicle):
    def __init__(self, brand, model, fuel):
        super().__init__(brand, model)
        self.__fuel = fuel

    def fuel_type(self):
        return self.__fuel
    
    def full_info(self):
        return f"{self.brand} {self.model} {self.__fuel}"
        
car1 = Car("Maruti", "Swift", "Diesel")
car2 = Car("Tata", "Safari", "Patrol")
car3 = Car("Tata", "Curvv", "EV")

print(car1.model)
print(car2.brand)
print(car3.vehicle_info())
print(car3.full_info())
'''

'''
# Scenario 2
class Employee():
    def __init__(self, name, language, department):
        self.name = name
        self.department = department
        self.__language = language

    def get_lang(self):
        return f"{self.__language}"

    def info(self):
        return f"{self.name} {self.__language} {self.department}"
    
class Developer(Employee):
    def __init__(self, name, department, language, project):
        super().__init__(name, department, language)
        self.__project = project
    
    def full_info(self):
        return f"{self.name} {self.get_lang()} {self.department}, Working On: {self.__project}" #Here tryin to run private through self.__language from another class.

e1 = Developer("Chaitanya", "Python", "Intern", "Learning")
e2 = Developer("Hardik", "C++", "Intern", "Learning")
e3 = Developer("Rohit", "Python", "Full Stack Developer", "ATS")
e4 = Developer("Kriti", "Java", "Full Stack Developer", "Job Board")

print(e1.name)
print(e2.name, e2.department)
print(e3.info())
print(e4.full_info())
'''
'''
#Polymorphism
class Conventional:
    def __init__(self, brand, model, fuel):
        self.brand = brand
        self.__model = model
        self.__fuel = fuel

    def model_info(self):
        return f"{self.__model}"
    
    def fuel_info(self):
        return f"{self.__fuel}"
    
    def full_info(self):
        return f"{self.brand} {self.__model} {self.__fuel}"
    
class Modern:
    def __init__(self, brand, model, fuel):
        self.brand = brand
        self.__model = model
        self.__fuel = fuel

    def model_info(self):
        return f"{self.__model}"
    
    def fuel_info(self):
        return f"{self.__fuel}"
    
    def full_info(self):
        return f"{self.brand} {self.__model} {self.__fuel}"
    
    
c1 = Conventional("Maruti", "Swift", "CNG")
c2 = Conventional("Tata", "Nexon", "Petrol")
c3 = Conventional("Hyundai", "Verna", "5")
c4 = Modern("MG", "Windsor", "EV")
c5 = Modern("Mahindra", "BE6", "EV")
c6 = Modern("Tata", "Curvv", "EV")

print(c1.brand)
print(c2.model_info())
print(c3.full_info())
print(c4.brand)
print(c5.fuel_info())
print(c6.full_info())
'''

class Modern:
    def __init__(self, brand, model, fuel):
        self.brand = brand
        self.__model = model
        self.Model = model
        self._fuel = fuel
        self.__fuel = fuel

    def model_info(self):
        return f"{self.__model}"
    
    def fuel_info(self):
        return f"{self.__fuel}"
    
    def full_info(self):
        return f"{self.brand} {self.__model} {self.__fuel}"
    
c4 = Modern("MG", "Windsor", "EV")
c5 = Modern("Mahindra", "BE6", "EV")
c6 = Modern("Tata", "Curvv", "EV")

print(c4.brand)
# print(c4.__model)
print(c4.Model)
print(c4._fuel)