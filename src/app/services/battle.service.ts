import { Injectable } from '@angular/core';
import { PokeapiService, Pokedex } from './pokeapi.service';

@Injectable({
  providedIn: 'root'
})
export class BattleService {

  private enemy: Trainer = {
    team: [],
    currentPokemonID: 0,
    currentHP: 1
  }



  private player: Trainer = {
    team: [],
    currentPokemonID: 0,
    currentHP: 1
  }


  getPlayer() {
    return this.player
  }

  getEnemy() {
    return this.enemy
  }


  async getRandomTeam() {
    if (this.enemy.team.length < 6) {
      for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * (151 - 1) + 1)
        let result: Pokedex = await this.pokeapi.fetchPokemon(random)
        this.enemy.team.push(result)
      }
    }
    //console.log(this.enemy.team)
  }


  addPokemon(pokemon: Pokedex): void {
    if (this.player.team.length < 6) {
      this.player.team.push(pokemon)
      console.log(this.player.team)
    } else {
      alert('Dein Team ist voll')
    }
  }

  hitEnemyHP(value: number) {
    this.enemy.currentHP -= value
  }

  setEnemyHp(value: number) {
    this.enemy.currentHP = value
  }

  hitPlayerHP(value: number) {
    this.player.currentHP -= value
  }

  setPlayerHp(value: number) {
    this.player.currentHP = value
  }

  getPlayerCurrentPokemon() {
    return this.player.currentPokemonID
  }

  getEnemyCurrentPokemon() {
    return this.enemy.currentPokemonID
  }

  setPlayerCurrentPokemon(value: number){
    this.player.currentPokemonID = value
  }
  setEnemyCurrentPokemon(value: number){
    this.enemy.currentPokemonID = value
  }

  incrementPlayerCurrentPokemon() {
    return this.player.currentPokemonID++
  }
  incrementEnemyCurrentPokemon() {
    return this.enemy.currentPokemonID++
  }
  getPlayerHP() {
    return this.player.currentHP
  }
  getEnemyHP() {
    return this.enemy.currentHP
  }
  
  async setEnemy() {
    await this.getRandomTeam()
    this.enemy.currentPokemon = this.enemy.team[this.enemy.currentPokemonID]
    this.enemy.currentHP = this.enemy.currentPokemon.stats[0].base_stat
    //console.log(this.enemy)

  }
  setPlayer() {
    this.player.currentPokemon = this.player.team[this.player.currentPokemonID]
    this.player.currentHP = this.player.currentPokemon.stats[0].base_stat
    //console.log(this.player)

  }
  
    changePokemon(team: string, index: number) {
  
      if (team == 'my') {
        this.player.currentPokemon = this.player.team[index]
        this.player.currentHP = this.player.currentPokemon.stats[0].base_stat
      } else {
        this.enemy.currentPokemon = this.enemy.team[index]
        this.enemy.currentHP = this.enemy.currentPokemon.stats[0].base_stat
      }
  
  
    }
    constructor(private pokeapi: PokeapiService) {
      this.setEnemy()
      //this.setPlayer()
      // console.log(this.player)
    }
  }
  
  
  
  
  export interface Trainer {
    team: Pokedex[]
    currentPokemon?: Pokedex
    currentPokemonID: number
    currentHP: number
  }
    
    
    
    
    
    
    
    
    
