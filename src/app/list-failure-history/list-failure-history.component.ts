import { Component, OnInit } from '@angular/core';
import { FailureHistoryService } from '../service/failure-history.service';
import { FailureHistory } from '../model/it-support';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-failure-history',
  templateUrl: './list-failure-history.component.html',
  styleUrl: './list-failure-history.component.css'
})
export class ListFailureHistoryComponent implements OnInit{
  listFailureHistory!:FailureHistory[]

  dataSource = new MatTableDataSource<FailureHistory>();
  constructor(private srv:FailureHistoryService){}
  ngOnInit(): void {
    this.srv.showAllFailureHistory().subscribe((res:FailureHistory[])=>{
      this.listFailureHistory=res
      this.dataSource.data=this.listFailureHistory;
    })
  
  }
  displayedColumns: string[] = ['Name Failure', 'Name Equipment', 'Failure Date', 'Resolve Date','Repair'];
}
