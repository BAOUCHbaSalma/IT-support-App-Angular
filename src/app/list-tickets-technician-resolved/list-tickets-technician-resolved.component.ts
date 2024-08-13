import { Component, OnInit } from '@angular/core';
import { SupportTicketService } from '../service/support-ticket.service';
import { SupportTicket } from '../model/it-support';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-tickets-technician-resolved',
  templateUrl: './list-tickets-technician-resolved.component.html',
  styleUrl: './list-tickets-technician-resolved.component.css'
})
export class ListTicketsTechnicianResolvedComponent implements OnInit{

  supportTicketsList!:SupportTicket[]
  idTechnicien:any
  dataSource = new MatTableDataSource<SupportTicket>();
  constructor(private srv:SupportTicketService,private router:ActivatedRoute){}

  ngOnInit(): void {
    this.idTechnicien=this.router.snapshot.paramMap.get("id")
    console.log("//////////resolved/"+this.idTechnicien)
    this.srv.findTicketsResolvedByTechnicien(this.idTechnicien).subscribe(res=>{
      this.supportTicketsList=res
      this.dataSource.data=this.supportTicketsList;
    })
   
  }
  displayedColumns: string[] = ['Description', 'Creation Date', 'Repair Description', 'Status','Name Equipment','Name Failure'];

}
