from csv import reader
from sys import argv
from cs50 import get_string
import sys
import csv
def main():
    if len(sys.argv)!= 3:
      print ("error")
      exit()
#entrada = get_string("valor: ")

#with open(argv[1], 'r') as archivo_csv:
    archivo = sys.argv[1]
    basedata =  open(archivo)
    data = csv.DictReader(basedata)
    contador = {}
    with open(sys.argv[2]) as k:
            secuencia = k.read()

    for str_sub in data.fieldnames[1:]:
        contador [str_sub] = mas_larg(secuencia, str_sub)
    for row in data:
        sec_s = (contador[str_sub]==int(row[str_sub]) for str_sub in contador)
        if all(sec_s):
            print(row["name"])
            basedata.close()
            return True
    print("No match")
    basedata.close()

def mas_larg(secuencia, str_sub):

    mas_larg_ = 0

    rango = range(len(secuencia))
    for i in rango:
        contador = 0
        while True:

            i + len(str_sub) * contador + len(str_sub)
            i + len(str_sub) * contador
            total_cot = secuencia[ i + len(str_sub) * contador:i + len(str_sub) * contador + len(str_sub)] == str_sub
            if total_cot:
                contador +=1
            else:
                break
            mas_larg_ = max(mas_larg_, contador)
    return mas_larg_
if __name__ == "__main__":

    main()



