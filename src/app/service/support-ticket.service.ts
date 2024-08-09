import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupportTicket, SupportTicketDTO, SupportTicketDTOUser } from '../model/it-support';
import { Observable } from 'rxjs';

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
  public findTicketsById(id:number):Observable<SupportTicketDTOUser[]>{
    return this.http.get<SupportTicketDTOUser[]>(`${this.urlApiUser}/findtickets/${id}`)

  }
}
