import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path:'', redirectTo:'Mexpal', pathMatch:'full' },
  { path:'Mexpal', component:PrincipalComponent },
  {path:'SignIn', component:FormComponent},
  {path:'LogIn', component:SigninComponent},
  {path:'Users', component:UsersComponent},
  {path:'**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
