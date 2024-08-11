import { Component, OnInit } from '@angular/core';
import { SupportTicketService } from '../service/support-ticket.service';
import { SupportTicket } from '../model/it-support';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard-support-ticket',
  templateUrl: './dashboard-support-ticket.component.html',
  styleUrl: './dashboard-support-ticket.component.css'
})
export class DashboardSupportTicketComponent implements OnInit{

  supportTicketList!:SupportTicket[]
  

  constructor(){}
  ngOnInit(): void {
 
  }



}
