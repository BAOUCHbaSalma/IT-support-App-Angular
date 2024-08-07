import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, Person } from '../model/it-support';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlApiUser="http://localhost:8080/user"
  urlApiAdmin="http://localhost:8080/admin"
  urlApiTechnician="http://localhost:8080/technician"
  urlApi="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public Login(login:LoginRequest){
    return this.http.post(`${this.urlApi}/login`,login)
  }



}
