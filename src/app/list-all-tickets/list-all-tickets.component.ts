import { Component, OnInit } from '@angular/core';
import { SupportTicket } from '../model/it-support';
import { MatTableDataSource } from '@angular/material/table';
import { SupportTicketService } from '../service/support-ticket.service';

@Component({
  selector: 'app-list-all-tickets',
  templateUrl: './list-all-tickets.component.html',
  styleUrl: './list-all-tickets.component.css'
})
export class ListAllTicketsComponent implements OnInit{
  supportTicketList!:SupportTicket[]
  dataSource = new MatTableDataSource<SupportTicket>();

  constructor(private srv:SupportTicketService){}

  ngOnInit(): void {
    this.srv.showAllTickets().subscribe(res=>{
      this.supportTicketList=res
      this.dataSource.data=this.supportTicketList;
      
    })
    
    
  }
  displayedColumns: string[] = ['Description', 'Creation Date', 'Repair Description', 'Status','Name Equipment','Name Failure' ,'update'];


}
