import { Component, OnInit } from '@angular/core';
import { SupportTicketService } from '../service/support-ticket.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SupportTicket } from '../model/it-support';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-tickets-technician-progress',
  templateUrl: './list-tickets-technician-progress.component.html',
  styleUrl: './list-tickets-technician-progress.component.css'
})
export class ListTicketsTechnicianProgressComponent implements OnInit{
  supportTicketsList!:SupportTicket[]
  idTechnicien:any
  dataSource = new MatTableDataSource<SupportTicket>();
  constructor(private srv:SupportTicketService,private router:ActivatedRoute){}

  ngOnInit(): void {
    this.idTechnicien=this.router.snapshot.paramMap.get("id")
    this.srv.findTicketsProgressByTechnicien(this.idTechnicien).subscribe(res=>{
      this.supportTicketsList=res
      this.dataSource.data=this.supportTicketsList;
    })
   
  }
  displayedColumns: string[] = ['Description', 'Creation Date', 'Repair Description', 'Status','Name Equipment','Name Failure','update'];

}
