import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner/owner.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  
  {path:'Owner',component:OwnerComponent},
  {path:'User',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

