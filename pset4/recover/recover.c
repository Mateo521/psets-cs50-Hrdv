#include <stdio.h>
#include <stdlib.h>
#include <cs50.h>
#include <stdbool.h>
#include <stdint.h>
//constante
#define maximo_buffer 512
typedef uint8_t BYTE;
int main(int argc, char *argv[])
{

    if (argc != 2)
    {
        printf("usa ./recover archivo.raw\n");
        return 1;
    }

 bool leer_texto = false;
    FILE *file = fopen(argv[1], "r"); // "card.raw" || argv[1]

    if (file == NULL)
    {
        printf("error, intente de nuevo\n");
        return 1;
    }

        BYTE buffer[maximo_buffer];
        int contador = 0;
        FILE *foto_puntero = NULL;


         char archivo [9];
    while (fread(buffer, 512, 1, file)== 1)
    {

      if (buffer[0] == 0xff && buffer[1] == 0xd8 && buffer[2] == 0xff && (buffer[3]& 0xf0) == 0xe0)
      {

                if (leer_texto == true)
                {
                    fclose(foto_puntero);
                }
                else if (leer_texto == false)
                {
                    leer_texto = true;
                }


                sprintf(archivo, "%03d.jpg", contador);

                foto_puntero = fopen (archivo, "w");
                contador++;


      }
                    if (leer_texto == true)
                {
                     fwrite(buffer, sizeof(buffer) ,1, foto_puntero);
                }

             /*  char archivo [8];
                sprintf(archivo, "%03d.jpg", contador);
                contador++;
                foto_puntero = fopen (archivo, "w");

                if(leer_texto == true)
                {
                fwrite(buffer, sizeof(buffer) ,1, foto_puntero);
                }
                */
      }
         fclose(file);
 fclose(foto_puntero);


 return 0;


}
