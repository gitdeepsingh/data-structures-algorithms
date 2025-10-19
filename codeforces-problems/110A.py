from sys import stdout

n = input()

c=0
for i in n:
    if i in ['4', '7']:
        c+=1

if(c == 4 or c == 7):
    print("YES")
else:
    print("NO")


