import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SuppoetTicketDTOTechnicien, SupportTicket, SupportTicketDTO, SupportTicketDTOUser, SupportTicketsDTOAdmin } from '../model/it-support';
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
    return this.http.get<SupportTicketDTOUser[]>(`${this.urlApi}/findtickets/${id}`)

  }
  public associateTicket(id:number,Ticket:SupportTicketsDTOAdmin){
   return this.http.put(`${this.urlApiAdmin}/ticket/update/${id}`,Ticket)
  }
  

  public showAllTickets():Observable<SupportTicket[]>{
    return this.http.get<SupportTicket[]>(`${this.urlApiAdmin}/showAll`)
  }

  public showTicketsInProgress():Observable<SupportTicket[]>{
    return this.http.get<SupportTicket[]>(`${this.urlApiAdmin}/tickets/progress`)
  }

  public showTicketsResolved():Observable<SupportTicket[]>{
    return this.http.get<SupportTicket[]>(`${this.urlApiAdmin}/tickets/resolved`)
  }

  public showTicketsPending():Observable<SupportTicket[]>{
    return this.http.get<SupportTicket[]>(`${this.urlApiAdmin}/tickets/pending`)
  }
  public findTicketsAssociateTehcnician(id:any):Observable<SupportTicket[]>{
    return this.http.get<SupportTicket[]>(`${this.urlApiTechnician}/tickets/technician/${id}`)
  }

  public findTicketsProgressByTechnicien(id:number):Observable<SupportTicket[]>{
    return this.http.get<SupportTicket[]>(`${this.urlApiTechnician}/tickets/progress/${id}`)

  }

  public findTicketsResolvedByTechnicien(id:number):Observable<SupportTicket[]>{
    return this.http.get<SupportTicket[]>(`${this.urlApiTechnician}/tickets/resolved/${id}`)

  }
  public upadteTicketByTechnician(id:number,supportTicketDTO:SuppoetTicketDTOTechnicien){
    return this.http.put(`${this.urlApiTechnician}/tickets/update/${id}`,supportTicketDTO)
  }

}
