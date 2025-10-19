from sys import stdin , stdout


s = stdin.readline()
s = s.replace('+', '')
s_new = ''.join(sorted(s))

stdout.write(s_new[0]+'+'.join(s_new[1:]))