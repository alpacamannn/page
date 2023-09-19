import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NaviService {

  constructor(private router: Router) {}

  goTo(location: string){
  this.router.navigateByUrl(location)    
}



}
