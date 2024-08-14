import { Component, OnInit } from '@angular/core';
import { PersonService } from '../service/person.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Erole, Person } from '../model/it-support';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css'
})
export class AddPersonComponent implements OnInit{
  personForm!:FormGroup
  roles=[Erole.TECHNICIAN,Erole.USER]

  constructor(private srv:PersonService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.personForm=this.fb.group({
      
      username:'',
      password:'',
      email:'',
      role:''
    })
    
    
  }
  save(){
    const person:Person=this.personForm.value
    this.srv.addUserAndTechnician(person).subscribe(()=>{
      this.ngOnInit()
    })
  }

}
