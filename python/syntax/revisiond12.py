read = open("D:\summer-progress\python\syntax\emp.txt", "r")
print(read.read())

with open("D:\summer-progress\python\syntax\emp.txt") as f:
    print(f.read(3))


read.close()
f.close()

with open("demofile.txt", "a") as f:
  f.write("Now the file has more content!")

#open and read the file after the appending:
with open("demofile.txt") as f:
  print(f.read())