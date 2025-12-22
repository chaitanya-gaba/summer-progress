# nonlocal
def outer():
    x = 5

    def inner():
        x = 10

    inner()
    print(x)
# Without nonlocal, a new local variable is created inside the inner function.
# This x is different from the x in the outer function.
# When the inner function finishes execution, its local x is destroyed.

outer() # 5

def outer():
    x = 5

    def inner():
        nonlocal x
        x = 10
    
    inner()
    print(x)

outer()
# nonlocal tells Python that this x belongs to the enclosing (outer) function,
# so Python should not create a new local variable, but update the existing one.