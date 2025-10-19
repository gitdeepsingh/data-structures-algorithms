from sys import stdout
str=input()
res=''
for char in str:
    if char not in res:
        res +=char
if len(res) % 2 == 0:
    stdout.write("CHAT WITH HER!")
else:
    stdout.write("IGNORE HIM!")

