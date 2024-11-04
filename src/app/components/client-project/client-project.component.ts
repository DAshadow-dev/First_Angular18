import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/Client';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit{
  clientProjectService = inject(ClientService)  ;
  employeeList : Employee[] = [];
  clientList : Client[] = [];
  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployee();
  }
    projectForm : FormGroup = new FormGroup({
      clientProjectId : new FormControl(0),
      projectName : new FormControl("",[Validators.required,Validators.minLength(4)]),
      startDate : new FormControl(""),
      expectedEndDate : new FormControl(""),
      leadByEmpId : new FormControl(0),
      completedDate : new FormControl(""),
      contactPerson : new FormControl(""),
      contactPersonContactNo : new FormControl(""),
      totalEmpWorking : new FormControl(""),
      projectCost : new FormControl(""),
      projectDetails : new FormControl(""),
      contactPersonMailId : new FormControl(""),
      clientId : new FormControl(""),
    });
  
  getAllEmployee(){
    this.clientProjectService.getAllEmployees().subscribe((res:APIResponseModel)=>{
      this.employeeList = res.data;
    })
  }

  getAllClient(){
    this.clientProjectService.getAllClients().subscribe((res:APIResponseModel)=>{
      this.clientList = res.data;
    })
  }

  onSaveProject(){
    const formValue = this.projectForm.value;
    debugger
    this.clientProjectService.addClientProjectUpdate(formValue).subscribe((res:APIResponseModel)=>{
      if(res.result){
        alert("Project Created Success");
      }
      else{
        alert(res.message);
      }
    })
  }
}
