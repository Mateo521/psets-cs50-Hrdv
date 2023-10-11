from cs50 import get_float
while True:
    entrada_plata = get_float ("Decime un valor: ")
    if (entrada_plata > 0) :
        break

monedas = 0
centavos = round(entrada_plata *100)
while centavos >= 25:
    centavos -= 25
    monedas += 1
while centavos >= 10:
    centavos -= 10
    monedas += 1
while centavos >= 5:
    centavos -= 1
    monedas +=1
while centavos >= 1:
    centavos -= 1
    monedas += 1
print (f"{monedas}")