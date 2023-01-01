import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from "@angular/common/http";
import { PrincipalComponent } from './components/principal/principal.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    SigninComponent,
    UsersComponent,
    PrincipalComponent,
    PagenotfoundComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
