import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner/owner.component';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'admin', loadChildren: ()=> import('./admin/admin.module').then(m => m.AdminModule)} ,
  {path:'owner',loadChildren: ()=>import('./owner/owner.module').then(m => m.OwnerModule)},
  {path:'user', loadChildren:()=>import('./user/user.module').then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

