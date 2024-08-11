import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Technician } from '../model/it-support';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  urlApiUser="http://localhost:8080/user"
  urlApiAdmin="http://localhost:8080/admin"
  urlApiTechnician="http://localhost:8080/technician"
  urlApi="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public showTechnicianAvailable():Observable<Technician[]>{
    return this.http.get<Technician[]>(`${this.urlApiAdmin}/technicianAvailable`)
  }
}
