thisdict = {
    "brand" : "ford",
    "model" : "mustang",
    "year" : 1969,
    "year" : 1920, # duplicates are not allowed
    "engine" : "v12",
    "color" : ["red", "yellow", "black"] # dict can have other data types also like set, list, tuple
}
print(thisdict) # dict is in key:value pair
print(thisdict["model"]) # print specific value of specific key, this can also raise error if key is not in the dict
print(len(thisdict))
print(type(thisdict))

newdict = dict(name = "kr$na", age = 26, country = "India", genre = "delhi-pop", fight = "bantai", last = "amigo!", explicit = "bad")
print(newdict)

# access item
print(thisdict.keys())
print(thisdict.get("model"))
print(thisdict.get("mileage")) # if we try to access invalid key via get() it will no show error but none.
print(thisdict.get("mileage", "2kmph"))

print(thisdict.values())
for value in thisdict.values():
    print(value)

print(thisdict.items())
for key, value in thisdict.items():
    print(key, value)

print("model" in thisdict)
print("average" not in thisdict)
thisdict.setdefault("average", "1km/L")
print(thisdict["average"])

thisdict.pop("engine")
print(thisdict.pop("speed", "missing")) # if key is not present this will avoid raising any error.
print(thisdict)
thisdict.popitem()
print(thisdict)

thisdict["model"] = 1964
print(thisdict["model"])
thisdict.update({"average" : "5km/L"})
print(thisdict["average"])

newdict.pop("fight")
del newdict["explicit"]
newdict.popitem()
print(newdict)

tempdict = newdict
print(tempdict)
del tempdict
# print(tempdict) this will cause an error because the dictionary is now delted
newdict.clear()
print(newdict)

for x in thisdict:
    print(x)
for x in thisdict.keys():
    print(x)

for x in thisdict:
    print(thisdict[x])
for x in thisdict.values():
    print(x)

mydict = thisdict.copy()
print(mydict)
del mydict
mydict = dict(thisdict)
print(mydict)

volkswogen = {
    "volkswogen": {
        "country": "Germany",
        "year": 1937,
        "most_popular": "Golf"
    },
    "audi": {
        "country": "Germany",
        "year": 1909,
        "most_popular": "A4"
    },
    "skoda": {
        "country": "Czech Republic",
        "year": 1895,
        "most_popular": "Octavia"
    },
    "bugati": {
        "country": "France",
        "year": 1909,
        "most_popular": "Chiron"
    },
    "mini cooper": {
        "country": "United Kingdom",
        "year": 1959,
        "most_popular": "Mini Cooper Hatch"
    }
}

print(volkswogen)
print(volkswogen["audi"])
print(volkswogen["mini cooper"]["year"])
print(volkswogen.get("bmw", {}).get("country", "not found")) # {} means the python will run empty dictionary if 1st key is not found and avoid error, but will run the 2nd get i.e. "country"

for x in volkswogen:
    print(x)
for brand, details in volkswogen.items():
    print(brand, "->", details)

for brand, details in volkswogen.items():
    print(
        brand,
        details["country"],
        details["year"],
        details["most_popular"]
    )
# for details in volkswogen.values():
#     print(details["country"])
# if "audi" in volkswogen:
#     print("Audi exists")
# if "country" in volkswogen["audi"]:
#     print("Country info available")
# volkswogen["audi"]["most_popular"] = "Q5"
# volkswogen["audi"]["ceo"] = "Gernot Döllner"