import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MovieapiService } from '../services/movieapi.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { NaviService } from '../services/navi.service';
import { PokeapiService, Pokedex } from '../services/pokeapi.service';
import { BattleComponent } from '../battle/battle.component';
import { BattleService } from '../services/battle.service';



@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  
})
export class TeamComponent implements OnInit{
  team: Pokedex[] = this.battle.getPlayer().team
  displayedColumns: string[] = ['sprite','nr', 'name', 'weight', 'height', 'switch'];
  dataSource: any
  
  constructor(private pokeapi: PokeapiService, private battle: BattleService){
    
  }

  choose(pokemon: Pokedex){
  
    
  }





  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.team)
  }

}
