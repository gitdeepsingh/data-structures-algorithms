from sys import stdin, stdout

n = int(stdin.readline().strip())

count = 0
if(n > 0  and n < 151):
    for i in range(n):
        val = input()
        if('++' in val):
            count += 1
        else:
            count -= 1

stdout.write(str(count))
