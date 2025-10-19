from sys import stdout

k,n,w=map(int, input().split())

dollars_needed=0
for i in range(w):
    dollars_needed += (i+1)*k

if dollars_needed-n < 0: 
    dollars_needed=0
    n=0
stdout.write(str(dollars_needed-n))