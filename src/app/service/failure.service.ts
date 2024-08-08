import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Failure } from '../model/it-support';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FailureService {

  urlApiUser="http://localhost:8080/user"
  urlApiAdmin="http://localhost:8080/admin"
  urlApiTechnician="http://localhost:8080/technician"
  urlApi="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public addFailure(failure :Failure){
    return this.http.post(`${this.urlApiAdmin}/failure`,failure)
  }
  public deleteFailure(idFailure:number){
    return this.http.delete(`${this.urlApiAdmin}/failure/${idFailure}`)
  }
  public updateFailure(idFailure:number,failure:Failure){
    return this.http.put(`${this.urlApiAdmin}/failure/${idFailure}`,failure)
  }
  public showFailures():Observable<Failure[]>{
    return this.http.get<Failure[]>(`${this.urlApi}/failure`)
  }
  public findById(idFailure:number){
    return this.http.get(`${this.urlApiAdmin}/findF/${idFailure}`)
  }
}
