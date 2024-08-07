import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../service/equipment.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Equipment, Erole } from '../model/it-support';

@Component({
  selector: 'app-update-equipment',
  templateUrl: './update-equipment.component.html',
  styleUrl: './update-equipment.component.css'
})
export class UpdateEquipmentComponent implements OnInit {
  idEquipment:any
  equipementForm!:FormGroup
  constructor(private srv:EquipmentService,private fb:FormBuilder,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.idEquipment=this.route.snapshot.paramMap.get("id")
    this.equipementForm = this.fb.group({
      name: '',
      insertionDate: '',
      status: '',
      userId: ''
    });
    this.srv.findById( this.idEquipment).subscribe((res:any) => {
      this.equipementForm.patchValue({
        name: res.name,
        insertionDate: res.insertionDate,
        status: res.status,
        userId: res.user.id
      });
    });
    
  }

  updateEquipment(): void {
    const updatedEquipment: Equipment = {
      idEquipement: this.idEquipment,
      name: this.equipementForm.value.name,
      insertionDate: this.equipementForm.value.insertionDate,
      status: this.equipementForm.value.status,
      user: {
        id: this.equipementForm.value.userId,
        username: '',
        password: '', 
        email: '',    
        role: Erole.USER 
      }
    };

    this.srv.updateEquipement(this.idEquipment, updatedEquipment).subscribe(() => {
      this.router.navigateByUrl(''); 
    });
  }

}
