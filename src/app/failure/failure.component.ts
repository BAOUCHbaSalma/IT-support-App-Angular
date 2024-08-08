import { Component, OnInit } from '@angular/core';
import { FailureService } from '../service/failure.service';
import { Failure } from '../model/it-support';

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrl: './failure.component.css'
})
export class FailureComponent implements OnInit{
  failureList!:Failure[]
  constructor(private srv:FailureService){}
  ngOnInit(): void {
    this.srv.showFailures().subscribe((res)=>{
      this.failureList=res;
    })
  }

}
