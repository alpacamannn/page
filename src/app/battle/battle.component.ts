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

  
  state = battlestate.player

  button = false

  dialog = "Du kannst dein Pokemon wechseln oder angreiffen"
  


  constructor(private pokeapi: PokeapiService, 
              private _bottomSheet: MatBottomSheet, 
              public battle: BattleService) {
             // console.log(this.opTeam)

              }

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
    this.gameloop()

  }

gameloop(){
  
  do{

    switch(this.state){
      
      case battlestate.player:
        let random = Math.floor(Math.random() * (10 - 1) + 1)
        this.battle.hitEnemyHP(random)
        this.state = battlestate.enemy
        // this.button = true
        if(this.battle.getPlayerHP() < 0){
        this.battle.changePokemon('my', this.battle.incrementPlayerCurrentPokemon())
        }
        return

      case battlestate.enemy:
        let random1 = Math.floor(Math.random() * (10 - 1) + 1)
        this.battle.hitPlayerHP(random1)
        this.state = battlestate.end
        // this.button = false
        if(this.battle.getEnemyHP() < 0){
        this.battle.changePokemon('op', this.battle.incrementEnemyCurrentPokemon())
        }
        return
      case battlestate.end:
        if(this.battle.getPlayerCurrentPokemon() > 6){
          alert("Du hast verloren")
        }else if(this.battle.getEnemyCurrentPokemon() > 6){
          alert("Du hast gewonnen")
        }

        
        this.state = battlestate.player
        break;
        
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

  
  
  
    
  

  
  

        

      







