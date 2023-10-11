from cs50 import SQL
from sys import argv
import sys
import csv
if len(argv) != 2:
     print("Usa :python roster.py y el nombre de su respectivo archivo")
     exit()

db= SQL("sqlite:///students.db")#SQL

with open (sys.argv[-1], "r") as caracteres: #sys.
   # csv.DictReader(caracteres)# delimieter=","


    for row in csv.DictReader(caracteres):

        first =   row['name'].split()[0]
        middle = row['name'].split()[1] if len (row['name'].split()) == 3 else None
        last = row['name'].split()[-1]


        db.execute("INSERT INTO students (first, middle, last, house, birth) VALUES (?, ?, ?, ?, ? )",first, middle, last,row["house"],row["birth"])
print("hecho.")