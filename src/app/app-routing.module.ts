import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { SignInComponent } from './components/user-authentication/sign-in/sign-in.component';
import { SignUpComponent } from './components/user-authentication/sign-up/sign-up.component'; 
import { ForgotPasswordComponent } from './components/user-authentication/forgot-password/forgot-password.component';
import { InsertScreenComponent } from './components/insert-screen/insert-screen.component';
import { ModifyScreenComponent } from './components/modify-screen/modify-screen.component';

const routes: Routes = [
  {path: 'login', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home-screen', component: HomeScreenComponent},
  {path: 'insert-screen', component: InsertScreenComponent},
  {path: 'modify-screen', component: ModifyScreenComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
