from cs50 import get_int
while True:

    entrada = get_int("Altura: ")
    if entrada > 0 and entrada <= 8:break
        for i in range(entrada):

print (" " *(entrada-i -1), end ="")
print ("#" *(i+1))



