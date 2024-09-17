import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './auth.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavAuthComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    NavAuthComponent
  ]
})
export class AuthModule { }
