import { Component, OnInit } from '@angular/core';
import { SupportTicketService } from '../service/support-ticket.service';
import { ActivatedRoute } from '@angular/router';
import { SupportTicket, SupportTicketDTOUser } from '../model/it-support';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-tickets-user',
  templateUrl: './list-tickets-user.component.html',
  styleUrl: './list-tickets-user.component.css'
})
export class ListTicketsUserComponent implements OnInit{
  listTicket!:SupportTicketDTOUser[]
  idUser!:any
  dataSource = new MatTableDataSource<SupportTicketDTOUser>();
  constructor(private srv:SupportTicketService,private route:ActivatedRoute){}


  ngOnInit(): void {
    this.idUser=this.route.snapshot.paramMap.get("id")
    this.srv.findTicketsById(this.idUser).subscribe(rs=>{
      this.listTicket=rs
      this.dataSource.data=this.listTicket;
    })
  }

  displayedColumns: string[] = ['Description', 'Creation date', 'Repair Description','Status','Name equipment','Name failure'];


}
