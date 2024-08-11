import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SupportTicketService } from '../service/support-ticket.service';
import { SupportTicket } from '../model/it-support';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-tickets-pending',
  templateUrl: './list-tickets-pending.component.html',
  styleUrl: './list-tickets-pending.component.css'
})
export class ListTicketsPendingComponent implements OnInit{

  ticketPendingList!:SupportTicket[]
  dataSource = new MatTableDataSource<SupportTicket>();

  constructor(private http:HttpClient,private srv:SupportTicketService){}
  ngOnInit(): void {

    this.srv.showTicketsPending().subscribe(res=>{
      this.ticketPendingList=res
      this.dataSource.data=this.ticketPendingList;
    })

    
   
  }
  displayedColumns: string[] = ['Description', 'Creation Date', 'Repair Description', 'Status','Name Equipment','Name Failure' ,'update'];

}
