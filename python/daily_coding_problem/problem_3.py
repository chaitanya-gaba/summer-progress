'''
This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
'''

# LeetCode solutions help
import collections

# tree structure
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

# tree to string conversion
class Codec:
    def serialize(self, root):  
        if root is None:
            return ""

        result = ""
        queue = collections.deque()
        queue.append(root)

        while queue:
            node = queue.popleft()

            if node is not None:
                result += str(node.val) + " "
                queue.append(node.left)
                queue.append(node.right)
            else:
                result += "n "

        return result

    def deserialize(self, data):
        if data == "":
            return None

        nodes = data.split()
        root = TreeNode(nodes[0])
        queue = collections.deque()
        queue.append(root)

        i = 1
        while queue and i < len(nodes):
            curr = queue.popleft()

            if nodes[i] != "n":
                curr.left = TreeNode(nodes[i])
                queue.append(curr.left)
            i += 1

            if i < len(nodes) and nodes[i] != "n":
                curr.right = TreeNode(nodes[i])
                queue.append(curr.right)
            i += 1

        return root

codec = Codec()   
node = TreeNode("root")
node.left = TreeNode("left")
node.left.left = TreeNode("left.left")
node.right = TreeNode("right")

s = codec.serialize(node)
tree = codec.deserialize(s)

print(tree.left.left.val)


s = codec.serialize(node)
tree = codec.deserialize(s)
print(tree.left.left.val)