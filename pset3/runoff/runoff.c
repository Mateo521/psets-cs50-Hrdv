#include <cs50.h>
#include <stdio.h>
#include <string.h>

// Max voters and candidates
#define MAX_VOTERS 100
#define MAX_CANDIDATES 9

// preferences[i][j] is jth preference for voter i
int preferences[MAX_VOTERS][MAX_CANDIDATES];

// Candidates have name, vote count, eliminated status
typedef struct
{
    string name;
    int votes;
    bool eliminated;
}
candidate;

// Array of candidates
candidate candidates[MAX_CANDIDATES];

// Numbers of voters and candidates
int voter_count;
int candidate_count;

// Function prototypes
bool vote(int voter, int rank, string name);
void tabulate(void);
bool print_winner(void);
int find_min(void);
bool is_tie(int min);
void eliminate(int min);

int main(int argc, string argv[])
{
    // Check for invalid usage
    if (argc < 2)
    {
        printf("Usage: runoff [candidate ...]\n");
        return 1;
    }

    // Populate array of candidates
    candidate_count = argc - 1;
    if (candidate_count > MAX_CANDIDATES)
    {
        printf("Maximum number of candidates is %i\n", MAX_CANDIDATES);
        return 2;
    }
    for (int i = 0; i < candidate_count; i++)
    {
        candidates[i].name = argv[i + 1];
        candidates[i].votes = 0;
        candidates[i].eliminated = false;
    }

    voter_count = get_int("Number of voters: ");
    if (voter_count > MAX_VOTERS)
    {
        printf("Maximum number of voters is %i\n", MAX_VOTERS);
        return 3;
    }

    // Keep querying for votes
    for (int i = 0; i < voter_count; i++)
    {

        // Query for each rank
        for (int j = 0; j < candidate_count; j++)
        {
            string name = get_string("Rank %i: ", j + 1);

            // Record vote, unless it's invalid
            if (!vote(i, j, name))
            {
                printf("Invalid vote.\n");
                return 4;
            }
        }

        printf("\n");
    }

    // Keep holding runoffs until winner exists
    while (true)
    {
        // Calculate votes given remaining candidates
        tabulate();

        // Check if election has been won
        bool won = print_winner();
        if (won)
        {
            break;
        }

        // Eliminate last-place candidates
        int min = find_min();
        bool tie = is_tie(min);

        // If tie, everyone wins
        if (tie)
        {
            for (int i = 0; i < candidate_count; i++)
            {
                if (!candidates[i].eliminated)
                {
                    printf("%s\n", candidates[i].name);
                }
            }
            break;
        }

        // Eliminate anyone with minimum number of votes
        eliminate(min);

        // Reset vote counts back to zero
        for (int i = 0; i < candidate_count; i++)
        {
            candidates[i].votes = 0;
        }
    }
    return 0;
}

// Record preference if vote is valid
bool vote(int voter, int rank, string name)
{

    int encontrar_index = -1;

      for (int i = 0; i < candidate_count; i++)
      {


  if (strcmp(candidates[i].name,name )== 0)
  {
encontrar_index = i;
break;
      }


  } if (encontrar_index == -1)
  {
      return false;

  }


preferences[voter][rank] =encontrar_index;
return true;




    return false;
}

// Tabulate votes for non-eliminated candidates
void tabulate(void)
{

   for (int i = 0; i< voter_count;i++)
   {


for(int h = 0; h < candidate_count; h++)
{

    int preferences_index = preferences[i][h];
    if(!candidates[preferences_index].eliminated)
    {

        candidates[preferences_index].votes ++;
        break;
    }

}


   }









    return;
}

// Print the winner of the election, if there is one
bool print_winner(void)
{

int objetivo = voter_count /2;
for (int i = 0; i<candidate_count;i++)
{

    if (candidates[i].votes>objetivo)
    {

        printf("%s\n", candidates[i].name);
        return true;

    }



}











    return false;
}

// Return the minimum number of votes any remaining candidate has
int find_min(void)
{
int minimo_votos = voter_count;

for (int i = 0; i < candidate_count; i++)
{
if (candidates[i].eliminated == false &&  candidates[i].votes <= minimo_votos)
{

    minimo_votos = candidates[i].votes;

}
    return minimo_votos;
}










    return 0;
}

// Return true if the election is tied between all candidates, false otherwise
bool is_tie(int min)
{
    int primer_no_eliminado_count = -1;
    int total_counts = 0;
    int matching_numbers = 0;
    for (int i = 0; i < candidate_count; i++)
    {

    if (!candidates[i].eliminated)
        {
            primer_no_eliminado_count =  candidates[i].votes;
            total_counts++;
        }

    }

    for (int i = 0; i < candidate_count; i++)

    {
        if (!candidates[i].eliminated && candidates[i].votes == primer_no_eliminado_count)
        {
            matching_numbers++;
        }
   }
    return matching_numbers == total_counts;










    return false;
}

// Eliminate the candidate (or candidates) in last place
void eliminate(int minimo_votos)
{
    for (int i = 0; i < candidate_count; i++)
        if (candidates[i].votes == minimo_votos)
        {
            candidates[i].eliminated = true;
        }
    return;
}


