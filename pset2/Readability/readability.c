#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>
#include <math.h>
int main(void)
{


    string texto = get_string("Texto: \n");
    int numero_letras = 0, numero_palabras = 0, numero_frases = 0; 
    
    if (isalpha(texto[0]))
    {  
        //primero se le da valor a las distintas oraciones
        numero_palabras++;
    }
   
    for (int i = 0, n = strlen(texto); i < n; i++) 
    {
        if (isalpha(texto[i]))
        { 
            numero_letras++;
            // da un valor de cantidad  de digitos a las letras
        }
        if ((isspace(texto[i]) || (texto[i] == '"')) && isalpha(texto[i + 1]))
        {
            numero_palabras++;
            // da un valor de cantidad de palabras en la oracion
        }
        if (texto[i] == '.' || texto[i] == '!' || texto[i] == '?')
        {
            numero_frases++;
            // da un valor de cantidad de frases dentro de la oracion usando de referencia el punto, interrogación y exclamacion
        }

    }


    float L = (float)numero_letras / (float)numero_palabras * 100, S = (float)numero_frases / (float)numero_palabras * 100;
    float index = 0.0588 * L - 0.296 * S - 15.8;
    printf("%d\n", (int)round(index));
    if (index < 1)
    {
        // uniendo las anteriores variables se utilizan para saber el grado de complejidad en esta
        printf("Before Grade 1\n");
    }
    else if (index >= 16)
    {
        printf("Grade 16+\n");
    }
    /* permite haber ciertas limitaciones dentro de la ejecucion del programa, no mayor a dieciseis y menor a 1. */
    else
    {
        printf("Grade %i\n", (int) round(index));
    }
}

// y finaliza el programa

