import { Component, OnInit } from '@angular/core';
import { SupportTicketService } from '../service/support-ticket.service';
import { SupportTicket } from '../model/it-support';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-tickets-resolved',
  templateUrl: './list-tickets-resolved.component.html',
  styleUrl: './list-tickets-resolved.component.css'
})
export class ListTicketsResolvedComponent implements OnInit{

  ticketsListResolved!:SupportTicket[]
  dataSource = new MatTableDataSource<SupportTicket>();


  constructor(private srv:SupportTicketService){}
  ngOnInit(): void {
    this.srv.showTicketsResolved().subscribe(res=>{
      this.ticketsListResolved=res
      this.dataSource.data=this.ticketsListResolved;
    })
    
  }
  displayedColumns: string[] = ['Description', 'Creation Date', 'Repair Description', 'Status','Name Equipment','Name Failure' ];

}
