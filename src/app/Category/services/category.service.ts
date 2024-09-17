import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/app/Shared/Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private _HttpClient:HttpClient
  ) { }

  getAllCategories():Observable<any>{
    return this._HttpClient.get(Environment.baseUrl + "categories");
  }
}
