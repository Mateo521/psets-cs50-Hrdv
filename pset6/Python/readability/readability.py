from cs50 import get_string
texto = get_string ("Diga un texto: ")
letras = 0
frases = 0
palabras =0
#round (len(palabras + letras))
####promedio_L = letras / palabras * 100
###promedio_S = frases / palabras * 100
##resultado = int((0.0588 * L - 0.296 * S - 15.8)+0.5)
#print(f"{promedio_L}")
texto_ = len(texto)
for i in range(texto_):
  #  if i.isspace():



    if texto[i].isalpha():
        letras +=1
    if texto[i] == '.' or texto[i] == '?' or texto[i] == '!':
        frases +=1
    if (i == 0 and texto[i] != ' ') or (i != texto_ - 1 and texto[i+1] == ' ' and texto[i] != ' '):

        palabras+=1



S =float( frases / palabras) * 100
L =float( letras / palabras) * 100
resultado =(0.0588 * L - 0.296 * S - 15.8 )
promedio = round (resultado)
if promedio <= 1:

    print ("Before Grade 1")
if promedio >=16:
    print ("Grade 16+")
else:
    print (f"Grade {promedio}")
