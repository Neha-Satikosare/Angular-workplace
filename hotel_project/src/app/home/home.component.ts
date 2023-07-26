import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
constructor(private route:Router){}

journey(journey:string){
  console.log('journey');
  if(journey==='admin')
  {
    this.route.navigateByUrl ('admin');

  }
else if(journey==='owner')
{
  this.route.navigateByUrl ('owner');

}
 else (journey==='user') 
{
  this.route.navigateByUrl ('user');

}

}


}

