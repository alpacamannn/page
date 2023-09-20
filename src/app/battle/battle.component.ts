import { Component, OnChanges, OnInit } from '@angular/core';
import { PokeapiService, Pokedex } from '../services/pokeapi.service';
import { state } from '@angular/animations';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { TeamComponent } from '../team/team.component';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit, OnChanges  {
  
  constructor(private pokeapi: PokeapiService, private _bottomSheet: MatBottomSheet){
    
    this.opPokemon = this.opTeam[this.opPokemonitem]
    this.setRandomPokemonTeam()
  }
  
  myPokeitem = 0
  myTeam: Pokedex[] = this.pokeapi.getTeam()
  myPokemon: Pokedex = this.myTeam[this.myPokeitem]
  myhp: number = this.myPokemon.stats[0].base_stat 
  
  opPokemonitem = 0
  opTeam: Pokedex[] = []
  opPokemon: Pokedex
  ophp: number = 1


  async setRandomPokemonTeam(){
  this.opTeam = await this.pokeapi.getRandomTeam()
  console.log(this.opTeam)
  this.opPokemon = this.opTeam[this.myPokeitem]
  this.ophp = this.opPokemon.stats[this.opPokemonitem].base_stat
  }
  
  
  attack(){
    
    if(this.ophp <= 0)
    {
      console.log('tot')
      this.myPokeitem++
      this.opPokemon = this.opTeam[this.myPokeitem]
      this.ophp = this.opPokemon.stats[this.opPokemonitem].base_stat
    }else{
      this.ophp -= 10
    }
  }

  openBottomSheet(){
    this._bottomSheet.open(TeamComponent)
  }

  
  
  ngOnInit(): void {
    
  }
  
  ngOnChanges(){
  
    
  }







}
