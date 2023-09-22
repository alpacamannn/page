import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { NaviService } from '../services/navi.service';
import { BattleService } from '../services/battle.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

constructor(private navi: NaviService, private battle: BattleService){}


 goTo(loc: string){
  this.navi.goTo(loc)
 }




ngOnInit(): void {
  this.battle.setEnemy()
 }


}
