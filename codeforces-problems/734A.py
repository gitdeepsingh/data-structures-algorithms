from sys import stdout

n=input()
outcomes=input()

Awins=0
Dwins=0
for char in outcomes:
    if char == 'A':
        Awins+=1
    else:
        Dwins+=1

if Awins > Dwins:
    stdout.write("Anton")
elif Dwins > Awins:
    stdout.write("Danik")
else:
    stdout.write("Friendship")

    
