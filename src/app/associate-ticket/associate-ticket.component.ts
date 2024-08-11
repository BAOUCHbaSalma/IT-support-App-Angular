import { Component, OnInit } from '@angular/core';
import { SupportTicketService } from '../service/support-ticket.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TechnicianService } from '../service/technician.service';
import { SupportTicketsDTOAdmin, Technician } from '../model/it-support';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-associate-ticket',
  templateUrl: './associate-ticket.component.html',
  styleUrl: './associate-ticket.component.css'
})
export class AssociateTicketComponent implements OnInit{
  idTicket!:any
  formUpdate !: FormGroup;

  constructor(private srv:SupportTicketService,private route:ActivatedRoute,private srvt:TechnicianService, private fb : FormBuilder,private router:Router){}
  technicianList!:Technician[]

  ngOnInit(): void {
    this.formUpdate = this.fb.group({
      idT:['']
    })
  this.idTicket=this.route.snapshot.paramMap.get('id')
  this.srvt.showTechnicianAvailable().subscribe(res=>{
    this.technicianList=res
  })
 
  }

  Associate(){
    const newTicket :SupportTicketsDTOAdmin= {
      idTechnicien: this.formUpdate.value.idT
    }
    this.srv.associateTicket(this.idTicket , newTicket).subscribe(()=>{
      this.router.navigateByUrl("dashboard/tickets")
    })
  }

}
