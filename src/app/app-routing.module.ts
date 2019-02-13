import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SignUpComponent} from './sign-up/sign-up.component'
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: 'sign-up',component: SignUpComponent },
  { path: '',redirectTo:'sign-up' },
  { path: '**',component:SignUpComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
