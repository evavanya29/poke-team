const INITIAL_STATE = {
  pokeAPI: {
    totalPokemonInPokedex: 0, // The number of pokemon accessible by pokeAPI. Updated on initial render
    nextFetchLink: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20", // Generated by pokeAPI to fetch the next set of pokemon. Limit determines how many pokemon we fetch with one API call. Default is 20.
    pokemon: [] // All pokemon the user has looked at so far, and all their details. API calls only fetch the name of each pokemon
  },
  pokeTeam: {
    pokeTeam: [], // An array of pokemon names (strings) corresponding to each pokemon the user adds to their team
    favoritePokemon: [] // Another array of pokemon names (strings) that the user has favorited for later viewing
  }
}
export default INITIAL_STATE