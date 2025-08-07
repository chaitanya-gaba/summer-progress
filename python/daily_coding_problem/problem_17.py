'''
This problem was asked by Google.

Suppose we represent our file system by a string in the following manner:

The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:

dir
    subdir1
    subdir2
        file.ext
The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.

The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:

dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.

We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).

Given a string representing the file system in the above format, return the length of the longest absolute path to a file in the abstracted file system. If there is no file in the system, return 0.

Note:

The name of a file contains at least a period and an extension.

The name of a directory or sub-directory will not contain a period.
'''

def lengthLongestPath(input_str):
    x = 0
    for i in input_str:
        if i == "\n" or i == "\t":
            continue
        else:
            x += 1
    return x - 4  # -4 for .ext

# Example usage
input1 = "python"
result = lengthLongestPath(input1)
print("Length without \\n or \\t:", result)

# def lengthLongestPath(input_str):
#     max_len = 0
#     path_len = {0: 0}  # depth: total length up to that depth

#     for line in input_str.split('\n'):
#         name = line.lstrip('\t')                  # get the name (without \t)
#         depth = len(line) - len(name)             # number of \t = depth

#         if '.' in name:  # it's a file
#             total_len = path_len[depth] + len(name)
#             max_len = max(max_len, total_len)
#             print(f"Found file: {name}, total path length: {total_len}")
#         else:  # it's a directory
#             path_len[depth + 1] = path_len[depth] + len(name) + 1  # +1 for '/'

#     return max_len

input1 = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"
print(lengthLongestPath(input1))  # 21 ("dir/subdir2/file.ext")

input2 = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
print(lengthLongestPath(input2))  # 32 ("dir/subdir2/subsubdir2/file2.ext")