import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environment } from 'src/app/Shared/Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(
    private _HttpClient:HttpClient,
  ) { }

  getAllBrands():Observable<any>{
    return this._HttpClient.get(Environment.baseUrl + "brands");
  }
}
