import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { ToTitlePipe } from './to-title.pipe';
import { PrettyPipe } from './pretty.pipe';
import { SafePipe } from './safe.pipe';
import { PrettyscalePipe } from './prettyscale.pipe';
import { PokedexComponent } from './pokedex/pokedex.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import { TeamComponent } from './team/team.component';
import { BattleComponent } from './battle/battle.component';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HomeComponent,
    ToTitlePipe,
    PrettyPipe,
    SafePipe,
    PrettyscalePipe,
    PokedexComponent,
    TeamComponent,
    BattleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatBottomSheetModule,
    MatListModule,
    MatProgressBarModule,
    MatCardModule,
      
  ], exports: [
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
