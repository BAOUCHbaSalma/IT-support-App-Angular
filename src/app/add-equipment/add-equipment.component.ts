import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../service/equipment.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Equipment, Erole, User } from '../model/it-support';
import { UserService } from '../service/user.service';
import e from 'express';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrl: './add-equipment.component.css'
})
export class AddEquipmentComponent implements OnInit{
 equipementForm!:FormGroup
 userList!:User[]
  

  constructor(private srv:EquipmentService,private fb:FormBuilder,private srvu:UserService){}

  ngOnInit(): void {
    
    this.srvu.showAllUsers().subscribe(res=>{
      this.userList=res
    })
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
      insertionDate:"",
      status:"",
      user: {
        id: this.equipementForm.value.userId,
        username: '',
        password: '',
        email: '',
        role: Erole.USER,
      }
    }
    
    this.srv.addEquipement(equipement).subscribe(()=>{
      this.ngOnInit()
    })
  }

}
