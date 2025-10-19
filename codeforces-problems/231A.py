from sys import stdin, stdout

n = int(stdin.readline().strip())

lists=[]
count=0
for i in range(n):
    x,y,z = map(int, input().split())
    lists.append([x,y,z])

for list in lists:
    c = 0
    for item in list:
        if item == 1:
            c +=1
    if(c > 1): count +=1
    c=0

stdout.write(str(count))



# Matrix = [[input() for x in range(n)]] 

# for m in Matrix:
#     strings = m.split(' ')
#     print(strings)

