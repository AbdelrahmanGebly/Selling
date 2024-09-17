import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Environment } from '../Shared/Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _HttpClient:HttpClient,
  ) { }

  login(loginForm : any){
    return this._HttpClient.post(Environment.baseUrl+'auth/signin',loginForm)
  }

  register(registerForm : any){
    return this._HttpClient.post(Environment.baseUrl+'auth/signup',registerForm)
  }

}
