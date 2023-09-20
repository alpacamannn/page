import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MovieapiService } from '../services/movieapi.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { NaviService } from '../services/navi.service';
import { PokeapiService, Pokedex } from '../services/pokeapi.service';



@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  
})
export class TeamComponent implements OnInit{
  team: Pokedex[] = this.pokeapi.getTeam()
  displayedColumns: string[] = ['sprite','nr', 'name', 'weight', 'height'];
  dataSource: any
  
  constructor(private pokeapi: PokeapiService){
    
  }


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.team)
  }

}
