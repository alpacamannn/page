import { Component, OnChanges, OnInit } from '@angular/core';
import { PokeapiService, Pokedex } from '../services/pokeapi.service';
import { state } from '@angular/animations';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { TeamComponent } from '../team/team.component';
import { BattleService } from '../services/battle.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit, OnChanges {

  state1 = battlestate
  state = battlestate.player
  


  constructor(private pokeapi: PokeapiService, 
              private _bottomSheet: MatBottomSheet, 
              public battle: BattleService) {
             // console.log(this.opTeam)

              }

  
  // myTeam: Pokedex[] = this.battle.getPlayer().team
  // myPokemon: Pokedex = this.myTeam[this.battle.getPlayer().currentPokemonID]
  // myhp: number = this.battle.getPlayer().currentHP

 

  
  // opTeam: Pokedex[] = this.battle.getEnemy().team
  // opPokemon: Pokedex = this.opTeam[this.battle.getEnemy().currentPokemonID]
  // ophp: number = this.battle.getEnemy().currentHP
  

  
  

  // attack() {
  //   console.log(this.battle.getEnemy())
  //   if (this.ophp <= 0) {
  //     console.log('tot')
  //     let currentPokemon = this.battle.getEnemy().currentPokemonID++
  //     if (currentPokemon < 6){
  //      this.battle.changePokemon('op',currentPokemon)
  //     }else{
  //       alert('You Win')
  //     }
  //   } else {
  //     if (this.ophp >= 10){
  //       this.ophp -= Math.floor(Math.random() * (10 - 1) + 1)
  //       this.opAttack()
  //     }
  //     else {
  //       this.opAttack()
  //       this.ophp -= Math.floor(Math.random() * (4 - 1) + 1)
  //     }
  //   }
  // }

  attack(){
    console.log()

  }

gameloop(){
  
  do{

    switch(this.state){
      
      case battlestate.player:





    }
}
  while(battlestate.end)



}




  


  openBottomSheet() {
    this._bottomSheet.open(TeamComponent)
  }



  ngOnInit(): void {
    this.battle.setPlayer()
  }

  ngOnChanges() {


  }







}

export enum battlestate{
player = 'player',
enemy = 'enemy',
end = 'end'
}