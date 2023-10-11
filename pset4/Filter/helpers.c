#include "helpers.h"
#include <math.h>

// Convert image to grayscale
void grayscale(int height, int width, RGBTRIPLE image[height][width])
{

    for (int fila = 0; fila < height; fila++)
    {

        for (int columna = 0; columna < width; columna++)
        {


            float promedio = (image[fila][columna].rgbtBlue + image[fila][columna].rgbtRed + image[fila][columna].rgbtGreen) / 3.0;

            float funcion = round(promedio);

            image[fila][columna].rgbtBlue = funcion;
            image[fila][columna].rgbtRed = funcion;
            image[fila][columna].rgbtGreen = funcion;


        }

    }




    return;
}

// Convert image to sepia
void sepia(int height, int width, RGBTRIPLE image[height][width])
{


    for (int fila = 0; fila < height; fila++)
    {

        for (int columna = 0; columna < width; columna++)
        {




            float sepiaRed = (float).393 * image[fila][columna].rgbtRed + .769 * image[fila][columna].rgbtGreen + .189 *
                             image[fila][columna].rgbtBlue;
            float sepiaGreen = (float).349 * image[fila][columna].rgbtRed + .686 * image[fila][columna].rgbtGreen + .168 *
                               image[fila][columna].rgbtBlue;
            float sepiaBlue = (float).272 * image[fila][columna].rgbtRed + .534 * image[fila][columna].rgbtGreen + .131 *
                              image[fila][columna].rgbtBlue;

            int rojo = round(sepiaRed);
            int verde = round(sepiaGreen);
            int azul = round(sepiaBlue);




            if (azul > 255)
            {
                azul = 255;
            }
            if (rojo > 255)
            {
                rojo = 255;
            }
            if (verde > 255)
            {
                verde = 255;
            }

            image[fila][columna].rgbtBlue = azul;
            image[fila][columna].rgbtRed = rojo;
            image[fila][columna].rgbtGreen = verde;





        }


    }



    return;
}

// Reflect image horizontally


void reflect(int height, int width, RGBTRIPLE image[height][width])
{


    for (int fila = 0; fila < height; fila++)
    {
        for (int columna = 0; columna < (width / 2); columna ++)
        {
            int azul = image[fila][columna].rgbtBlue;
            int verde = image[fila][columna].rgbtGreen;
            int rojo = image[fila][columna].rgbtRed;

            image[fila][columna].rgbtGreen = image[fila][width - columna - 1].rgbtGreen;
            image[fila][columna].rgbtRed = image[fila][width  - columna - 1].rgbtRed;
            image[fila][columna].rgbtBlue = image[fila][width - columna - 1 ].rgbtBlue;

            image[fila][width - columna - 1].rgbtGreen = verde;
            image[fila][width  - columna - 1].rgbtRed = rojo;
            image[fila][width  - columna - 1].rgbtBlue = azul;

        }





    }
    return;


}

// Blur image
void blur(int height, int width, RGBTRIPLE image[height][width])
{
    RGBTRIPLE nimagen[height][width];
// aca hago una copia temporal a la imagen para hacer desenfoque


    for (int fila = 0; fila < height; fila++)
    {
        for (int columna = 0; columna < width; columna ++)
        {
            nimagen[fila][columna] = image[height][width];
        }
    }

    for (int fila = 0; fila < height; fila++)
    {
        for (int columna = 0; columna < width; columna ++)
        {
            int totalprmazul = 0;
            int totalprmrojo = 0;
            int totalprmverde = 0;
            float contador = 0.0;


            if (fila >= 0 && columna >= 0)
            {
                totalprmazul = totalprmazul + nimagen[fila][columna].rgbtBlue;
                totalprmrojo = totalprmrojo + nimagen[fila][columna].rgbtRed;
                totalprmverde = totalprmverde + nimagen[fila][columna].rgbtGreen;
                contador = contador + 1;
            }
            if (fila >= 0 && columna - 1 >= 0)
            {
                totalprmazul = totalprmazul + nimagen[fila][columna - 1].rgbtBlue;
                totalprmrojo = totalprmrojo + nimagen[fila][columna - 1].rgbtRed;
                totalprmverde = totalprmverde + nimagen[fila][columna - 1].rgbtGreen;
                contador = contador + 1;
            }

            if (columna - 1 >= 0 && fila - 1 >= 0)
            {
                totalprmazul = totalprmazul + nimagen[fila - 1][columna - 1].rgbtBlue;
                totalprmrojo = totalprmrojo + nimagen[fila - 1][columna - 1].rgbtRed;
                totalprmverde = totalprmverde + nimagen[fila - 1][columna - 1].rgbtGreen;
                contador = contador + 1;
            }

            if (fila >= 0 && columna - 1 >= 0)
            {
                totalprmazul = totalprmazul + nimagen[fila][columna - 1].rgbtBlue;
                totalprmrojo = totalprmrojo + nimagen[fila][columna - 1].rgbtRed;
                totalprmverde = totalprmverde + nimagen[fila][columna - 1].rgbtGreen;
                contador = contador + 1;
            }

            if (columna >= 0 && fila - 1 >= 0)
            {
                totalprmazul = totalprmazul + nimagen[fila - 1][columna].rgbtBlue;
                totalprmrojo = totalprmrojo + nimagen[fila - 1][columna].rgbtRed;
                totalprmverde = totalprmverde + nimagen[fila - 1][columna ].rgbtGreen;
                contador = contador + 1;
            }

            if ((columna + 1 < width && fila - 1 >= 0) && (fila - 1 >= 0 && columna + 1 >= 0))
            {
                totalprmazul = totalprmazul + nimagen[fila - 1][columna + 1].rgbtBlue;
                totalprmrojo = totalprmrojo + nimagen[fila - 1][columna + 1].rgbtRed;
                totalprmverde = totalprmverde + nimagen[fila - 1][columna + 1].rgbtGreen;
                contador = contador + 1;
            }

            // helpme i dont find the error, todavia no lo termino




            image[fila][columna].rgbtBlue = round(totalprmazul / (contador * 1));
            image[fila][columna].rgbtRed = round(totalprmrojo / (contador * 1));
            image[fila][columna].rgbtGreen = round(totalprmverde / (contador * 1));
            /*
             float promedio = round(azul + verde + rojo);
             */
        }

    }

// l = largo
//a = ancho




    return;
}
