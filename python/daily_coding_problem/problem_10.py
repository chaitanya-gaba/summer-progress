'''
This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.   
'''
import time
def job_scheduler(f, n):
    time.sleep(n)
    print(f)

f = time.strftime("%Y-%m-%d %H:%M:%S")
n = 7 #seconds
job_scheduler(f, n)
currenttime = time.strftime("%Y-%m-%d %H:%M:%S")
print(currenttime)

'''
import time

def job_scheduler(f, n):
    time.sleep(n / 1000)  # Convert milliseconds to seconds
    f()

# Example function to schedule
def say_hello():
    print("Hello! This was scheduled.")

# Call scheduler to run say_hello after 2000 milliseconds (2 seconds)
job_scheduler(say_hello, 2000)

'''