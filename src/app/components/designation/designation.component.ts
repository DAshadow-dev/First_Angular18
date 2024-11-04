import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{

  designationList : IDesignation[] = [];
  masterService = inject(MasterService);
  isLoader : boolean = true;
  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((res:APIResponseModel)=>{
      this.designationList = res.data;
      this.isLoader = false;
    },err =>{
      alert("API Error: " + err);
      this.isLoader = false;
    })
  }
}
