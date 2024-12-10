import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../model/user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
  public sendReactiveFormDatafDetails(formData:UserModel):Observable<UserModel>{
    return this.http.post<UserModel>('http://localhost:3001/users', formData)
  }
  private apiUrl = 'http://localhost:3001/users';
 
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
