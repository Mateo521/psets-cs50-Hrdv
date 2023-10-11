#include <stdio.h>
#include <cs50.h>
#include<stdlib.h>
#include<ctype.h>
#include<string.h>

int main(int argumc, string argumv[])
{ 
    if (argumc == 2)
        //comprueba si hay 2 argumentos , para poder hacer el proceso de cripto.
    {
     
        int n = strlen(argumv[1]);
        
        int i = 0;
        
        
        for (int l = 0; l < n; l++)
        
        {
         
            if (!isdigit(argumv[1][l]))
            
            {
                printf("Usage: ./caesar key\n");
                
                
                
                return 1;
            }
        }
        int key = atoi(argumv[1]);
        
        //atoi se utiliza para convertir un string en un int o entero
        
        string text = get_string("plaintext: ");
        
        printf("ciphertext: ");
        
        int t = strlen(text);
        
        for (int l = 0; l < t; l++)
        
        {
         
         
         
            //repite varias veces ,el texto letra por letra ,sin formato
            if (isupper(text[l]))
            
            {
                printf("%c", (((text[l] - 'A') + key) % 26) + 'A');
            }

            else if (islower(text[l]))
            {
                printf("%c", (((text[l] - 'a') + key) % 26) + 'a');
                
                
            
            }

            else
            {
                printf("%c", text[l]);
            }
        }
    }
    else
    {
        printf("Usage: ./caesar key\n");
        return 1;
    }
    printf("\n");
    return 0;
}