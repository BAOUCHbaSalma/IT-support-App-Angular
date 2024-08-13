import { Component, OnInit } from '@angular/core';
import { SupportTicketService } from '../service/support-ticket.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SuppoetTicketDTOTechnicien } from '../model/it-support';
import { DecodejwtService } from '../service/decode-jwt.service';

@Component({
  selector: 'app-update-tickets-technician',
  templateUrl: './update-tickets-technician.component.html',
  styleUrl: './update-tickets-technician.component.css'
})
export class UpdateTicketsTechnicianComponent implements OnInit{
  ticketForm!:FormGroup
  idTicket!:any
  idTechnicien!:any
  constructor(private srv :SupportTicketService,private fb:FormBuilder,private route:ActivatedRoute,private router:Router,private srvb:DecodejwtService){}
  ngOnInit(): void {
  
    this.idTicket = this.route.snapshot.paramMap.get('idT');
    this.ticketForm=this.fb.group({
      repairDescpription:''
    }

    ) 
    const token=localStorage.getItem('jwt');
    this.srvb.getIdByUsername(token).subscribe(res=>{
      this.idTechnicien=res
    })

  
  }
  update(){
 
      const newTicket :SuppoetTicketDTOTechnicien= {
        repairDescpription: this.ticketForm.value.repairDescpription
      }
      this.srv.upadteTicketByTechnician(this.idTicket , newTicket).subscribe(()=>{
        this.router.navigateByUrl(`dashtechnician/${this.idTechnicien}`);
      })
    }

  }


