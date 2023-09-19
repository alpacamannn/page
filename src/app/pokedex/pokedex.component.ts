import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { MatTableDataSource } from '@angular/material/table';
import { NaviService } from '../services/navi.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

pokedex: Pokedex[] = []
displayedColumns: string[] = ['sprite','nr', 'name', 'weight', 'height'];
dataSource: any 

  constructor(private pokeapi: PokeapiService, private navi: NaviService){
    
  }

async getPokemon(num: number){
const pokemonData = await this.pokeapi.fetchPokemon(num)
const data: Pokedex = await pokemonData.json()
return data;
}

goTo(dir:string){
  this.navi.goTo(dir)
}

async getTruePokedex(){
  let pokedexNum = 151

  for(let i = 1; i <= pokedexNum; i++){
    let data = await this.getPokemon(i)
    this.pokedex.push(data)
  }
  console.log(this.pokedex)
  return this.dataSource = new MatTableDataSource(this.pokedex)
}


ngOnInit(): void {
  this.getTruePokedex();
}


}
export interface Pokedex{
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
  stats: []
  types: []
  weight: number
}

export interface sprites{
  back_default?: string
  back_female?: string
  back_shiny?: string
  back_shiny_female?: string
  front_default: string
  front_female?: string
  front_shiny?: string
  front_shiny_female?: string

}