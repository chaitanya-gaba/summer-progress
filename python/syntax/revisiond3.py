tuple1 = ("hola", "amigo", "kaise ho", "theek ho?", "amigo")
print(tuple1)
# ordered, unchangable, allow duplicates
thisistuple = ("apple",)
print(type(thisistuple))
del thisistuple
thisistuple = ("apple")
print(type(thisistuple))
del thisistuple
thisistuple = ("apple", 1, "cherry", 5)
print(thisistuple)
print(type(thisistuple))
print(thisistuple[2])
print(thisistuple[-3])
print(tuple1[2:5])
print(tuple1[-4:-1])
if "amigo" in tuple1:
    print("Amigo is in the tuple.")
# to change or update element in tuple first we'll convert tuple to list and reverse back to tuple.
x = ("apple", "banana", "cherry")
y = list(x)
y[1] = "kiwi"
y.append("orange")
y.remove("kiwi")
x = tuple(y)

print(x)
y += thisistuple
print(y)

fruit = ("apple", "cherry", "banana")
(green, red, yellow) = fruit
print(green)
print(red)
print(yellow)
fruits = ("apple", "mango", "papaya", "pineapple", "cherry")
(green, *tropic, red) = fruits
print(green)
print(tropic)
print(red)
for x in fruits:
    print(x)
for i in range(len(fruits)):
    print(fruits[i])
y = 0
while y < len(fruits):
    print(fruits[y])
    y += 1

# join tuples
newtuple = fruit + fruits
print(newtuple)
print(fruit * 2)
print(newtuple.count("cherry"))
print(newtuple.index("cherry"))

# Sets
myset = {"sad", "miss", "frustrated", "fucked", "drunk", "get-away", "long-distance"}
# unordered(means can't be accessed by index), can't be changed, duplicates not allowed
tempset = {True, 1, False, 0, "empty", 8, 1.95}
print(tempset)
print(len(tempset))
print(type(tempset))
thisset = set(("apple", "banana", "cherry")) # note the double round-brackets
print(thisset)

# /access item
for x in tempset:
    print(x)
print("empty!" in tempset)
print("ban" not in tempset)

# add - remove element
myset.add("chaos")
myset.remove("fucked") # will raise error if not in set
myset.discard("get-away") # will NOT raise error if not in set
myset.pop() # will pop any random element, as it is unordered
print(myset)

# update
thisset = {"apple", "banana", "cherry"}
mylist = {"kiwi", "orange"}
k = ["huh"]

thisset.update(mylist)
thisset.update(k)

print(thisset)

thisset.clear()
print(thisset)
del thisset
# print(thisset), will not work as it is deleted

for x in myset:
    print(x)
# can't use while with set as it is unordered

# join sets

a = {1, 2, 3}
b = {3, 4, 5}

a.union(b)
# {1, 2, 3, 4, 5}

a | b
# {1, 2, 3, 4, 5}

a = {1, 2, 3}
b = {3, 4, 5}

a.update(b)
print(a)
# {1, 2, 3, 4, 5}

a = {1, 2, 3}
b = {2, 3, 4}

a.intersection(b)
# {2, 3}

a & b
# {2, 3}

a = {1, 2, 3}
b = {2, 3, 4}

a.difference(b)
# {1}

a - b
# {1}

a = {1, 2, 3}
b = {2, 3, 4}

a.symmetric_difference(b)
# {1, 4}

a ^ b
# {1, 4}

a = frozenset([1, 2, 3, 4])
print(a)
# in frozenset we can't add or remove

a = frozenset([1, 2, 3])
b = frozenset([3, 4, 5])

print(a | b)    # union → frozenset({1, 2, 3, 4, 5})
print(a & b)    # intersection → frozenset({3})
print(a - b)    # difference → frozenset({1, 2})
print(a ^ b)    # symmetric difference → frozenset({1, 2, 4, 5})

# used as dictionary
d = {
    frozenset({1, 2}): "A",
    frozenset({3, 4}): "B"
}
print(d)