import { Component, OnInit } from '@angular/core';
import { FailureService } from '../service/failure.service';
import { Failure } from '../model/it-support';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrl: './failure.component.css'
})
export class FailureComponent implements OnInit{
  failureList!:Failure[]
  dataSource = new MatTableDataSource<Failure>();

  constructor(private srv:FailureService){}
  ngOnInit(): void {
    this.srv.showFailures().subscribe((res)=>{
      this.failureList=res;
      this.dataSource.data = this.failureList;
    })
  }
  deleteFailure(id:number){
    this.srv.deleteFailure(id).subscribe(()=>{
      this.ngOnInit()
    })
  }

  displayedColumns: string[] = ['Name', 'Description', 'delete', 'update'];

}
