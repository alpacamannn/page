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
    let pokeData: Pokedex = await pokemonData.json()
    this.cache[id] = pokeData;
    //  console.log(pokeData)
    return pokeData;
  }

  

 

}
export interface Pokedex {
  abilities: []
  base_experience: number
  forms: []
  game_indices: []
  height: number
  held_items: []
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: []
  name: string
  order: number
  past_types: []
  species: {}
  sprites: sprite
  stats: stats[]
  types: []
  weight: number
}

export interface sprite {
  back_default?: string
  back_female?: string
  back_shiny?: string
  back_shiny_female?: string
  front_default: string
  front_female?: string
  front_shiny?: string
  front_shiny_female?: string

}


export interface stats {
  base_stat: number
  effort: number
  stat: {}
}