import { Component, OnInit } from '@angular/core';

import { SupportTicketService } from '../service/support-ticket.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Equipment, Erole, EStatus, Failure, SupportTicket, SupportTicketDTO } from '../model/it-support';
import { DecodejwtService } from '../service/decode-jwt.service';
import { EquipmentService } from '../service/equipment.service';
import { FailureService } from '../service/failure.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrl: './add-ticket.component.css'
})
export class AddTicketComponent implements OnInit{
  ticketForm!:FormGroup
  idUser:any
  equipmentList!:Equipment[]
  failuresList!:Failure[]

  constructor(private srv:SupportTicketService,private fb:FormBuilder,private srt:DecodejwtService,private srve:EquipmentService,private srvF:FailureService){}
  ngOnInit(): void {

    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('jwt');
      if (token) {
        this.srt.getIdByUsername(token).subscribe(id => {
         this.idUser =id;   
         this.srve.findByIdUser(id).subscribe(res=>{
          this.equipmentList=res
        }) 
        });
      }
    }
    this.srvF.showFailures().subscribe(res=>{
      this.failuresList=res
    })
   
    

  
    this.ticketForm=this.fb.group({
      description:'',
      equipementId:'',
      failureId:''
    })

    
  
  }

  saveTicket(){
    const supportTicketDTO:SupportTicketDTO={
      description: this.ticketForm.value.description,
      failureId: this.ticketForm.value.failureId,
      equipmentId: this.ticketForm.value.equipementId,
      userId: this.idUser
      
    }
    console.log("//:::::idIser"+this.idUser)
   this.srv.addTicket(supportTicketDTO).subscribe(()=>{
    this.ngOnInit()
   })
  }

}
