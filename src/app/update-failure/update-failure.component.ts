import { Component, OnInit } from '@angular/core';
import { FailureService } from '../service/failure.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Failure } from '../model/it-support';

@Component({
  selector: 'app-update-failure',
  templateUrl: './update-failure.component.html',
  styleUrl: './update-failure.component.css'
})
export class UpdateFailureComponent implements OnInit{
  idFailure!:any
  failureForm!:FormGroup
  constructor(private srv:FailureService,private route:ActivatedRoute,private fb:FormBuilder,private router:Router){}
  ngOnInit(): void {
    this.idFailure=this.route.snapshot.paramMap.get('id')
    this.failureForm=this.fb.group({
      name:'',
      description:''
    })
    this.srv.findById(this.idFailure).subscribe((res:any)=>{
      this.failureForm.patchValue({
        name:res.name,
        description:res.description
      })
      
    }

    )
    
  }
  updateFailure(){
    const failure:Failure=this.failureForm.value
    this.srv.updateFailure(this.idFailure,failure).subscribe(()=>{
      this.router.navigateByUrl('failures')
    })
  }

}
