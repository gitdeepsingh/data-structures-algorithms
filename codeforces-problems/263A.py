matrix = []
for i in range(5):
    row = list(map(int, input().split()))
    if(len(row) != 5):
        exit()
    matrix.append(row)

print(matrix)