import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FailureService } from '../service/failure.service';
import { Failure } from '../model/it-support';

@Component({
  selector: 'app-add-failure',
  templateUrl: './add-failure.component.html',
  styleUrl: './add-failure.component.css'
})
export class AddFailureComponent implements OnInit{
  failureForm!:FormGroup
  constructor(private fb:FormBuilder,private srv:FailureService){}

  ngOnInit(): void {
    this.failureForm=this.fb.group({
      name:'',
      description:'',
    })
    
  }

  saveFailure(){
    const failure:Failure=this.failureForm.value
    this.srv.addFailure(failure).subscribe(()=>{
      this.ngOnInit()
    })
  }

}
