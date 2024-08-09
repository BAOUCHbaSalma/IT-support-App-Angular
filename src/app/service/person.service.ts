import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  urlApiUser="http://localhost:8080/user"
  urlApiAdmin="http://localhost:8080/admin"
  urlApiTechnician="http://localhost:8080/technician"
  urlApi="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public findByUsername(username:string){
    return this.http.get(`${this.urlApi}/find/${username}`)
  }
}
