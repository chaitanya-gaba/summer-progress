print ("hello world...")
print ('hey baby...')
x = 30
print (x + 20)
y = "udi"
print (y + "baba")
print (type(x), "\n", type(y))
price = 2299
print ('price of new charger is: ',  price, "which is a CMF GaN charger.")

ty = 54
def myfunc():
    ty = 55
    print (ty)
myfunc()
print ("Value of ty: ", ty)

d = 131
print (d)
def myfunc1():
    global d
    d = 12
    print (d)

myfunc1()
print (d)



'''Important to ask from bhaiya'''
# Text Type: str
text = "Hello, World!"
print("Text (str):", text)

# Numeric Types: int, float, complex
a = 10         # int
b = 3.14       # float
c = 2 + 3j     # complex
print("Integer (int):", a)
print("Float (float):", b)
print("Complex (complex):", c)

# Sequence Types: list, tuple, range
my_list = [1, 2, 3]        
my_tuple = (4, 5, 6)       
my_range = range(3)        
print("List:", my_list)
print("Tuple:", my_tuple)
print("Range (converted to list):", list(my_range))

# Mapping Type: dict
my_dict = {"name": "Alice", "age": 12}
print("Dictionary (dict):", my_dict)

# Set Types: set, frozenset
my_set = {1, 2, 3}
my_frozenset = frozenset([4, 5, 6])
print("Set:", my_set)
print("Frozenset:", my_frozenset)

# Boolean Type: bool
is_true = True
is_false = False
print("Boolean True:", is_true)
print("Boolean False:", is_false)

# Binary Types: bytes, bytearray, memoryview
b = bytes([65, 66, 67])             # A, B, C
ba = bytearray([68, 69, 70])        # D, E, F
mv = memoryview(bytes([71, 72, 73]))# G, H, I
print("Bytes:", b)
print("Bytearray:", ba)
print("Memoryview (first byte):", mv[0])

# None Type: NoneType
x = None
print("NoneType:", x)