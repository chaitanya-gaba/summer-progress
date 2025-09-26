a = [1, 2, 3, 4]
b = a
b.append(6)
print(a) 
""" output: [1, 2, 3, 4, 6] """
# this is called liasing. Multiple variables refer to same mamory. If we modify through one variable, the changes will affect when you access from anyone.

print(len("python"[::-1]))
""" output: 6 """
# first it'll reverse "python" to "nohtyP" then it'll measure the length i.e. 6 and print
x = 10
if x > 5:
    print("A")

elif x > 8:
    print("B")

else: print("C")

""" output: A """

def is_even(n):
    if n % 2 == 0:
        return True
    
    else:
        return False
    
is_even(9)
is_even(8)