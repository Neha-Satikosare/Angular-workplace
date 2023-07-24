import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
constructor(private router :Router){}


journey(journey:string){
  this.router.navigateByUrl('admin');
console.log('journey');
this.router.navigateByUrl('owner');
this.router.navigateByUrl('user');

}


}

