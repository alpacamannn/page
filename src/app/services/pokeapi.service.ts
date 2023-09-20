import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  team: Pokedex[] = []
  randomTeam: Pokedex[] = []
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

  addPokemon(pokemon: Pokedex) {
    if (this.team.length < 6) {
      this.team.push(pokemon)
      console.log(this.team)
    } else {
      alert('Dein Team ist voll')
    }
  }

  getTeam() {
    return this.team
  }

  async RandomTeam() {
    if(this.randomTeam.length < 6){
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * (151 - 1) + 1)
      let result: Pokedex = await this.fetchPokemon(random)
      this.randomTeam.push(result)
    }
  }
    console.log(this.randomTeam)
   
  }

  async getRandomTeam() {
    await this.RandomTeam()
    return this.randomTeam
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
  sprites: sprites
  stats: stats[]
  types: []
  weight: number
}

export interface sprites {
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