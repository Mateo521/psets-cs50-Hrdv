#include <stdio.h>
#include <cs50.h>
#include <math.h>
int main(void)
{
    float plata;
    do
    {
        plata = get_float("decime el valor de tu cambio: "); //dice el valor de tu cambio
    }

    while (plata < 0);
    int centavos = round(plata * 100); //se multiplica por cien para que sea un numero entero
    int monedas = 0;
    while (centavos >= 25)
    {
        centavos -= 25; // mientras sea el valor a 25 devuelva ese valor y asi con todos
        monedas ++;
    }
    while (centavos >= 10)
    {
        centavos -= 10;
        monedas ++;
    }
    while (centavos >= 5)
    {
        centavos -= 5;
        monedas ++;
    }
    while (centavos >= 1)
    {
        centavos -= 1;
        monedas ++;
    }


    printf("%i\n", monedas); //imprime la cantidad de monedas mas optimas

    //{}


}
