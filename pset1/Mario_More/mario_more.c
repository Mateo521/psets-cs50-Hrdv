#include <cs50.h>
#include <stdio.h>

int main(void)
{ 
    int numero;
    
    do
    {
        numero = get_int("Altura: "); 
        //es la altura de la torre
    }
    while (numero <= 0 || numero >= 9);
    // el maximo de la funcion
    for (int i = 0; i < numero; i++)
    {
        //repite un numero de veces la torre por el usuario
        for (int j = numero - i; j > 1; j--)
        {
            printf(" ");
            // repite numero de veces la torre y añade espacios a la izquierda
        }
        for (int k = 0; k < i + 1; k++)
        {
            //añade la cantidad de numero de usuario hashs para hacer la torre
            printf("#");
        }
        printf("\n");
    }
}
