import { HttpClient } from '@angular/common/http';
import { Component,inject,Inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  roleList : IRole[] = [];
  http = inject(HttpClient)

  // constructor(private http: HttpClient){

  // }
ngOnInit(): void {
    this.getAllRoles();
}

getAllRoles() {
  this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:APIResponseModel) =>{
    this.roleList = res.data;
  })
}



















  //string, number, boolean, date, object,array, null, undefined

  firstName : string = "Angular Tutorial"
  angularVersion = "Angular 18"
  version : number = 18
  isActive : boolean = true
  currentDate : Date = new Date()
  selectedState : string = ""

  /*Data binding => interplocation {{}}, property binding [], two way data binding [(ngModel)] ,
                    event binding
    Direction => Structual, attribute
              ngIf,ngFor || ngClass, ngStyle
  */
                    
  showWelcomAlert () {
    alert(`Welcome to ${this.firstName}`)
  }
  showMessage (message: string) {
    alert(message)
  }
}
