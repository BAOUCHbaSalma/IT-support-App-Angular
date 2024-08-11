import { Component, OnInit } from '@angular/core';
import { SupportTicketService } from '../service/support-ticket.service';
import { SupportTicket } from '../model/it-support';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-tickets-progress',
  templateUrl: './list-tickets-progress.component.html',
  styleUrl: './list-tickets-progress.component.css'
})
export class ListTicketsProgressComponent implements OnInit{

  ticketsListProgress!:SupportTicket[]
  dataSource = new MatTableDataSource<SupportTicket>();


  constructor(private srv:SupportTicketService){}
  ngOnInit(): void {
    this.srv.showTicketsInProgress().subscribe(res=>{
      this.ticketsListProgress=res
      this.dataSource.data=this.ticketsListProgress;
    })
    
  }
  displayedColumns: string[] = ['Description', 'Creation Date', 'Repair Description', 'Status','Name Equipment','Name Failure' ];
}
