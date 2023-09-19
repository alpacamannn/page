import { Component } from '@angular/core';
import { MovieapiService } from './services/movieapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 

 
  title = 'homepage';
  
  constructor(private router: Router){}


  goToMovies(){
    this.router.navigate(['movie-list'])
  }

  goToYoutube(){
    this.router.navigate(['youtube'])
  }

  


}
