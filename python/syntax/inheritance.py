#July 2nd 2025
class formula1():
    def __init__(self, driver, team, engine):
        self.driver = driver
        self.team = team
        self.engine = engine

    def __str__(self):
        return f"{self.driver} "f"{self.team} "f"{self.engine}"

class f1constructor(formula1):
    def __init__(self, driver, team, engine):
        super().__init__(driver, team, engine)

d1 = f1constructor("Hamilton", "ScodieraFerrari", "Ferrari")
d2 = f1constructor("Verstappen", "Red Bull", "Honda")
d3 = f1constructor("Piastri", "McLaren", "BMW")
d4 = f1constructor("Russel", "Mercedes", "MercedesAMG")

print(d1.driver, d1.team)
print(d2.driver, d2.engine)
print(d3.engine)
print(d4.engine, d4.driver)

#..-. ..- -.-. -.- . -..