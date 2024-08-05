import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../service/equipment.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Equipment, Erole } from '../model/it-support';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrl: './add-equipment.component.css'
})
export class AddEquipmentComponent implements OnInit{
 equipementForm!:FormGroup
  

  constructor(private srv:EquipmentService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.equipementForm=this.fb.group({
      name:'',
      insertionDate:'',
      status:'',
      userId:''

    }) 
  }

  addEquipement(){
    const equipement:Equipment={
      idEquipement: 0,
      name: this.equipementForm.value.name,
      insertionDate: this.equipementForm.value.insertionDate,
      status:  this.equipementForm.value.status,
      user: {
        id: this.equipementForm.value.userId,
        username: '',
        password: '',
        email: '',
        role: Erole.USER
      }
    }
    
    this.srv.addEquipement(equipement).subscribe(()=>{
      this.ngOnInit()
    })
  }

}
