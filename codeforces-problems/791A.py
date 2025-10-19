from sys import stdout

l,b = map(int, input().split())

years = 0
while l <= b:
    years+=1
    l=3*l
    b=2*b
    if l > b:
        break

stdout.write(str(years))