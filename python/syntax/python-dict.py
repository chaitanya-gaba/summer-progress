# all dictionary commands
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict)
# Output: {'brand': 'Ford', 'model': 'Mustang', 'year': 1964"}

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict["brand"])
# Output: Ford

thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964,
  "year": 2020
}
print(thisdict)
# Output: {'brand': 'Ford', 'model': 'Mustang', 'year': 2020}

print(len(thisdict))
# Output: 3 i.e. Total Number of attributes

thisdict = {
  "brand": "Ford",
  "electric": False,
  "year": 1964,
  "colors": ["red", "white", "blue"]
}
print(type(thisdict))

thisdict = dict(brand = "Ford", year = 1964, Model = "Mustang")
print(thisdict)

thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = thisdict.get("model")
print(x)
x = thisdict.keys()
print(x) #before the change

thisdict["color"] = "white"

print(x) #after the change
print(thisdict.get("color"))
print(thisdict.values)
