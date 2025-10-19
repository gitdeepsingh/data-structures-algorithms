from sys import stdout

s=input()
t=input()

if s[::-1].lower() == t.lower():
    stdout.write("YES")
else:
    stdout.write("NO")