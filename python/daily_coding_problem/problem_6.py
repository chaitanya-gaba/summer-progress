'''
This problem was asked by Google.

An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding next and prev 
fields, it holds a field named both, which is an XOR of the next node and the previous node. Implement an XOR 
linked list; it has an add(element) which adds the element to the end, and a get(index) which returns the node at index.
If using a language that has no pointers (such as Python), you can assume you have access to get_pointer and 
dereference_pointer functions that converts between nodes and memory addresses.
'''

# Google

class Node:
    def __init__(self, value):
        self.value = value
        self.both = 0  # this will store XOR of prev and next node addresses

memory = {}

def get_pointer(node):
    if node == None:
        return 0
    return id(node)

def dereference_pointer(address):
    if address == 0:
        return None
    return memory[address]

class XORLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def add(self, value):
        new_node = Node(value)
        new_ptr = get_pointer(new_node)
        memory[new_ptr] = new_node

        if self.head == None:
            self.head = new_node
            self.tail = new_node
            new_node.both = 0
        else:
            # for tail, both = prev XOR new_node
            new_node.both = get_pointer(self.tail)
            self.tail.both = self.tail.both ^ new_ptr
            self.tail = new_node

    def get(self, index):
        prev_addr = 0
        current = self.head
        i = 0
        while current != None and i < index:
            next_addr = prev_addr ^ current.both
            prev_addr = get_pointer(current)
            current = dereference_pointer(next_addr)
            i = i + 1
        return current

# testing
my_list = XORLinkedList()
my_list.add(1)
my_list.add(2)
my_list.add(3)
my_list.add(4)

node = my_list.get(2)
if node != None:
    print(node.value)  # should print 3
else:
    print("No node found")