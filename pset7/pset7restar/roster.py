
from cs50 import SQL
from sys import argv
if len(argv) != 2:
     print("Usa :python roster.py y el nombre de su respectivo archivo")
     exit()
db= SQL("sqlite:///students.db")
filas = db.execute("SELECT * FROM students WHERE house = ? ORDER BY last , first", argv[-1])
for fila in filas:
    primero = fila['first']
    medio = fila['middle']
    ultimo = fila['last']
    cumpleaños = fila['birth']
    print(primero+ ' '+ (medio+' 'if medio else '') + ultimo+ ', born '+ str(cumpleaños))