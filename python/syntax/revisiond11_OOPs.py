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