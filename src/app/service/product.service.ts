import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClientService:HttpClient) { }

  public getProductFromJSONdataServer():Observable<any>{
    return this.httpClientService.get('http://localhost:3001/Product');
  }
}
