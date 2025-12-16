mylist = ["apple", "pineapple", "papaya", "strawberry", "kiwi", "melon", "mango"]
print(mylist)
print(mylist[1])
print(mylist[-1])
print(mylist[2:5])
print(mylist[:4])
print(mylist[2:])
print(mylist[-4:-1])
if "apple" in mylist:
    print("Apple is in the list.")
mylist[1] = "gavava"
print(mylist)
mylist[1:3] = ["watermelon", "cherry"]
print(mylist)
newlist = ["ap", "gp", "ip"]
newlist[1:3] = ["watermelon"]
print(newlist)
newlist.insert(2, "gp")
print(newlist)

# add items
newlist.append("cherry")
newlist.insert(3, "ip")
print(newlist)
mylist.extend(newlist)
print(mylist)
mytuple = ("ele2", "ele1")
mylist.extend(mytuple)
print(mylist)
mylist.pop(-6)
mylist.remove("cherry") # in duplicacy 1st from start will be removed as it acts on address
print(mylist)
del mylist[-1]
print(mylist)
# mylist.clear() "list will be empty after this"
# print(mylist)
# del newlist "this will delete the list and cause an error"
# print(newlist)

for x in mylist:
    print(x)

for i in range(len(mylist)):
    print(i, mylist[i])

i = 0
while i < len(mylist):
    print(mylist[i])
    i += 1

[print(x) for x in newlist]

newlist.clear()
mylist.clear()
print(newlist, mylist)
newlist += [1, 4, 67, 8, 90, 32, 324, 2, 6, 9]
mylist += ["kiwi", "cherry", "papaya", "banana", "apple", "pineapple"]
newlist.sort()
mylist.sort()
print(newlist, mylist)
newlist.sort(reverse=True)
print(newlist)
newlist.clear()
newlist += ["kiwi", "Orange", "apple", "Pineapple", "Papaya", "cherry", "Coconut", "zebra melon"]
newlist.sort()
print(newlist)
# copy list
thislist = list(newlist)
print(thislist)
thislist.clear()
thislist = newlist[1:9:2]
print(thislist)
list3 = newlist + thislist
print(list3)
list3.clear()
for x in newlist:
    list3.append(x)
print("List 3: ", list3)
list1 = []
list1.extend(list3)
print("List 1: ", list1)
number = list1.count("zebra melon")
print(number)
number = list1.index("zebra melon")
print(number)
number = list1.insert(8, "zebra melon")
print(list1)