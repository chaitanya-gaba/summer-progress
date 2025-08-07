'''
This problem was asked by Google.

The area of a circle is defined as πr^2. Estimate π to 3 decimal places using a Monte Carlo method.

Hint: The basic equation of a circle is x2 + y2 = r2.
'''

import random

def estimate_pi(num_points):
    count_inside = 0

    for i in range(num_points):
        x = random.random()
        y = random.random()
        print(x, y)

        if x*x + y*y <= 1:
            count_inside += 1

    pi = 4 * (count_inside / num_points)
    return round(pi, 3)

print("Estimated value of pi:", estimate_pi(10000))