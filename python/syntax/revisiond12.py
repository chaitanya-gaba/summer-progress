read = open("D:\summer-progress\python\syntax\emp.txt", "r")
print(read.read())

with open("D:\summer-progress\python\syntax\emp.txt") as f:
    print(f.read(3))


read.close()
f.close()