// Implements a dictionary's functionality

#include <stdbool.h>
#include <ctype.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <strings.h>
#include "dictionary.h"

// Represents a node in a hash table
typedef struct node
{
    char word[LENGTH + 1];
    struct node *next;
}
node;

// Number of buckets in hash table

const unsigned int N = 26;//cambio no todavia

// Hash table


node *table[N];

// Returns true if word is in dictionary else false
bool check(const char *word) // completo
{



node* nodoptrtmp= table[hash(word)] ;

 while(nodoptrtmp != NULL)
 {

     if(strcasecmp(nodoptrtmp->word,word)== 0)
     {
      return true;
     }
     nodoptrtmp->next= nodoptrtmp;
 }
    return false;



}
// Hashes word to a number
unsigned int hash(const char *word)//completo
{

  int k = 0;
for(int i = 0;i <strlen(word);i++) // word[i] != "\0" i <strlen(word)
{
k = k + tolower(word[i]); //
}

int l = k % N;

    return l;
}

int total_palabras = 0;
// Loads dictionary into memory, returning true if successful else false
bool load(const char *dictionary) //completo // compeldo
{
    FILE *archivo = fopen(dictionary, "r");


    if (archivo == NULL)

    {
        return false;
    }
    for (int i = 0; i < N; i++)
    {
        table [i] = NULL;
    }
    char temporal[LENGTH + 1];
    while (fscanf(archivo, "%s", temporal) != EOF) // != EOF
    {
        node *temporalnode = malloc(sizeof(node));

        strcpy(temporalnode->word, temporal); // video /-cambio

        temporalnode->next = NULL;
        if (table[hash(temporal)] == NULL)
        {
            temporalnode->next = NULL;
            table[hash(temporal)] =  temporalnode;

        }
        else
        {

            table[hash(temporal)] = temporalnode->next;
            temporalnode = table[hash(temporal)];
        }
        total_palabras++;
    }

    return true;
    fclose(archivo);
}

// Returns number of words in dictionary if loaded else 0 if not yet loaded
unsigned int size(void)//completo
{

    return total_palabras;
}

// Unloads dictionary from memory, returning true if successful else false
bool unload(void)
{

    for (int i = 0; i < N ; i++)
    {
        node *cmpt = table[i];

        while (cmpt != NULL)
        {
            node *pntr = cmpt;
            cmpt  = pntr ->next;
        }
        table[i] = NULL;
           free(cmpt);
    }
    return true;

}