from sys import stdout
n=input()
row=input()
count=0
for i in range(len(row)-1):
    if row[i] == row[i+1]:
        count+=1
stdout.write(str(count))
