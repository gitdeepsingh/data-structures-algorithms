from sys import stdout

word = input()

lower_count=sum(1 for c in word if c.islower())
upper_count=len(word)-lower_count

if upper_count > lower_count:
    word=word.upper()
else:
    word=word.lower()

stdout.write(word)
