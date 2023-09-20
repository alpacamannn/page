import { Component, OnInit } from '@angular/core';
import { PokeapiService, Pokedex } from '../services/pokeapi.service';
import { MatTableDataSource } from '@angular/material/table';
import { NaviService } from '../services/navi.service';
import {MatBottomSheet} from '@angular/material/bottom-sheet';

import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

team: Pokedex[] = []
pokedex: Pokedex[] = []
displayedColumns: string[] = ['sprite','nr', 'name', 'weight', 'height', 'plus'];
dataSource: any 

  constructor(private pokeapi: PokeapiService, private navi: NaviService, private _bottomSheet: MatBottomSheet){
    
  }

async getPokemon(num: number){

const pokemonData = await this.pokeapi.fetchPokemon(num)

return pokemonData;
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

addPokemon(pokemon: Pokedex){
 this.pokeapi.addPokemon(pokemon)
}

openBottomSheet(){
  this._bottomSheet.open(TeamComponent)
}

getTeam(){
  return this.team
}



ngOnInit(): void {
  this.getTruePokedex();
}


}
