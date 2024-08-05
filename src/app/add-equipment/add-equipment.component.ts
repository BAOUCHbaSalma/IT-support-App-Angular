import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../service/equipment.service';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrl: './add-equipment.component.css'
})
export class AddEquipmentComponent implements OnInit{
  

  constructor(private srv:EquipmentService){}

  ngOnInit(): void {
   
    
  }

}
