import { Component, OnInit } from '@angular/core';

import { SupportTicketService } from '../service/support-ticket.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Erole, EStatus, SupportTicket, SupportTicketDTO } from '../model/it-support';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrl: './add-ticket.component.css'
})
export class AddTicketComponent implements OnInit{
  ticketForm!:FormGroup
  constructor(private srv:SupportTicketService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.ticketForm=this.fb.group({
      description:'',
      userId:'',
      equipementId:'',
      failureId:''

    })
  
  }

  saveTicket(){
    const supportTicketDTO:SupportTicketDTO={
      description: this.ticketForm.value.description,
      failureId: this.ticketForm.value.failureId,
      equipmentId: this.ticketForm.value.equipementId,
      userId: this.ticketForm.value.userId
    }
   this.srv.addTicket(supportTicketDTO).subscribe(()=>{
    this.ngOnInit()
   })
  }

}
