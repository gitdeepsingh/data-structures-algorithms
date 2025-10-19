from sys import stdout
import math

max_step=5
x=int(input())

to_walk= math.ceil(x/max_step)

stdout.write(str(to_walk))
