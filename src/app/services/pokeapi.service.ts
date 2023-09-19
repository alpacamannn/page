import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  cache: { [key: number]: any } = {};

  async fetchPokemon(id: number): Promise<any> {
    // a check for pokemon in cache
    if (this.cache[id]) {
      return this.cache[id];
    }
  
    // Getting the api call in the cache
    const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    this.cache[id] = pokemonData;
    // console.log(pokemonData)
    return pokemonData;
  }



  
}
