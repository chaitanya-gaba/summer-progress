'''
This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1
'''

# LeetCode help
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def __init__(self):
        self.count = 0

    def countUnivalSubtrees(self, root):
        def helper(node):
            if node is None:
                return True
            
            left_uni = helper(node.left)
            right_uni = helper(node.right)

            if not left_uni or not right_uni:
                return False

            left_val = node.left.val if node.left else node.val
            right_val = node.right.val if node.right else node.val

            if node.val == left_val and node.val == right_val:
                self.count += 1
                return True
            return False

        helper(root)
        return self.count

# example tree
root = TreeNode(5)
root.left = TreeNode(1)
root.right = TreeNode(5)
root.left.left = TreeNode(5)
root.left.right = TreeNode(5)
root.right.right = TreeNode(5)

sol = Solution()
print(sol.countUnivalSubtrees(root))  # Output should be 4