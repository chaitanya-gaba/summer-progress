# July 2nd 2025
'''
class myClass:
    x = "My Class"
    z = 238590 + 3432847

p1 = myClass()
print(p1.x)
print(p1.z)

class formula1():
    def __init__(self, driver, team, engine):
        self.driver = driver
        self.team = team
        self.engine = engine

    def __str__(self):
        return f"{self.driver} "f"{self.team} "f"{self.engine}"

d1 = formula1("Hamilton", "ScodieraFerrari", "Ferrari")
d2 = formula1("Verstappen", "Red Bull", "Honda")
d3 = formula1("Piastri", "McLaren", "BMW")
d4 = formula1("Russel", "Mercedes", "MercedesAMG")

print(d1.driver, d1.team)
print(d2.driver, d2.engine)
print(d3.engine)
print(d4.engine, d4.driver)

print(d1, "\n", d2, "\n", d3, "\n", d4)
'''

class MyClass():
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def sum(self):
        z = self.x + self.y
        return f"Sum of both numbers: {z}, {self.x + self.y}"

x = int(input("Enter value of x: "))
y = int(input("Enter value of y: "))
print(f"The value of x is: {x} and y is: {y} repectively!")
p1 = MyClass(x, y)
print(p1.sum())

