import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/it-support';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlApiUser="http://localhost:8080/user"
  urlApiAdmin="http://localhost:8080/admin"
  urlApiTechnician="http://localhost:8080/technician"
  urlApi="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public showAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.urlApiAdmin}/showall`)
  }
}
