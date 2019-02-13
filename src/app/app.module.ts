import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {SignUpComponent} from "./sign-up/sign-up.component";
import { LoginComponent } from './login/login.component';
import { TweetComponent } from './tweet/tweet.component'    


const routes: Routes = [
  { path: 'sign-up',component: SignUpComponent },
  { path: 'home',component: LoginComponent },
  { path: '',component : LoginComponent},
  { path: 'tweeter',component : TweetComponent},
  { path: '**',component:SignUpComponent},
];

@NgModule({
imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule               
],
exports: [RouterModule],
declarations: [
    AppComponent,  
    SignUpComponent, LoginComponent, TweetComponent      
],
bootstrap: [AppComponent]
})
export class AppModule {

}