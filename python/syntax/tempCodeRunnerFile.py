def count_upto(n):
    count = 1
    while count <= n:
        yield count
        count += 1

print(count_upto(5))