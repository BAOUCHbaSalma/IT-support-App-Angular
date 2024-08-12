import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/it-support';

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

  public findPersonByRole():Observable<Person[]>{
    return this.http.get<Person[]>(`${this.urlApiAdmin}/employees`)

  }
  public getIdByUsername(username:string){
    return this.http.get(`${this.urlApi}/getid/${username}`)
  }

}

