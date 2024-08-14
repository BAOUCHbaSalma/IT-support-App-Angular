import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FailureHistory } from '../model/it-support';

@Injectable({
  providedIn: 'root'
})
export class FailureHistoryService {
   
  urlApiUser="http://localhost:8080/user"
  urlApiAdmin="http://localhost:8080/admin"
  urlApiTechnician="http://localhost:8080/technician"
  urlApi="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public showAllFailureHistory():Observable<FailureHistory[]>{
    return this.http.get<FailureHistory[]>(`${this.urlApiAdmin}/failurehistory`)
  }
}
