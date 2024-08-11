import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Person } from '../model/it-support';
import { PersonService } from '../service/person.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent implements OnInit{
  EmployeeList!:Person[]
  dataSource = new MatTableDataSource<Person>();
  constructor(private srv:PersonService){}
  ngOnInit(): void {
    this.srv.findPersonByRole().subscribe(res=>{
      this.EmployeeList=res
      this.dataSource.data=this.EmployeeList;
    })
    
  }
  displayedColumns: string[] = ['Username', 'Email', 'Role'];

}
