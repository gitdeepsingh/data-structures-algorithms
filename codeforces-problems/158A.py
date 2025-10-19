# n and k (1 ≤ k ≤ n ≤ 50) 

from sys import stdout

n, k = map(int, input().split())
scores = list(map(int, input().split()))

threshold = scores[k - 1] 

count = 0
for score in scores:
    if score >= threshold and score > 0:
        count += 1

stdout.write(str(count))