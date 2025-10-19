from sys import stdin , stdout

str1 = stdin.readline()
str2 = stdin.readline()

if str1.lower() < str2.lower():
    stdout.write(str(-1))
elif str1.lower() > str2.lower():
    stdout.write(str(1))
else:
    stdout.write(str(0))