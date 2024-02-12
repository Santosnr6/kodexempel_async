'use strict';

const pokemonArray = [];

async function fetchPokemon(pokeApiString) {
    console.log('fetchPokemons()');
    
    try {
        const response = await fetch(pokeApiString);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
        return null;
    }
    

    // fetch(pokeApiString)
    // .then(response => {
    //     console.log(response);
    //     if(response.status !== 200) {
    //         throw 'Request rejected';
    //     }
    //     return response.json();
    // })
    // .then(data => {
    //     console.log(data);
    //     console.log(data.results);
    //     console.log(data.results[100].name);
    // })
    // .catch(error => {
    //     console.log(error);
    // });
}

async function program() {
    const pokemons = await fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    console.log(pokemons);

    pokemons.results.forEach(pokemon => pokemonArray.push(pokemon));

    const bulbasaur = await fetchPokemon(pokemonArray[0].url);

    console.log(bulbasaur);
    const mainRef = document.querySelector('main');

    bulbasaur.moves.forEach(move => {
        const pRef = document.createElement('p');
        pRef.textContent = move.move.name;
        mainRef.appendChild(pRef);
    });

    // pokemonArray.forEach(pokemon => {
    //     const pRef = document.createElement('p');
    //     pRef.textContent = pokemon.name;
    //     mainRef.appendChild(pRef);
    // })
}

program();
