import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupportTicket, SupportTicketDTO } from '../model/it-support';

@Injectable({
  providedIn: 'root'
})
export class SupportTicketService {

  urlApiUser="http://localhost:8080/user"
  urlApiAdmin="http://localhost:8080/admin"
  urlApiTechnician="http://localhost:8080/technician"
  urlApi="http://localhost:8080"


  constructor(private http:HttpClient) { }

  public addTicket(ticket :SupportTicketDTO){
    return this.http.post(`${this.urlApiUser}/ticket`,ticket)
  }
}
