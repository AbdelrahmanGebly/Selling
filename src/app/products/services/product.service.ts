import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/app/Shared/Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _HttpClient:HttpClient
  ) { }

  getAllProducts(){
    return this._HttpClient.get(Environment.baseUrl+'products')
  }
}
