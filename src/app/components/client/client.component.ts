import { ClientService } from './../../services/client.service';
import { CommonModule} from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { RolesComponent } from '../roles/roles.component';
import { FormsModule } from '@angular/forms';
import { Client } from '../../model/class/Client';
import { APIResponseModel } from '../../model/interface/role';
import { DesignationComponent } from "../designation/designation.component";

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, RolesComponent, FormsModule, DesignationComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientObj : Client = new Client();
  clientList : Client[] = [];
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(){
    this.clientService.getAllClients().subscribe((res:APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  onReset(){
    this.clientObj = new Client();
  }
  onSaveClient() {
    debugger;
    this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel) => {
      if(res.result){
        alert("Client Created successfully");
        this.loadClients();
        this.clientObj = new Client();
      }
      else{
        alert(res.message);
      }
    })
  }

  onEdit(data : Client){
    this.clientObj = data;
  }

  onDelete(id : number){
    const isDelete = confirm("Are you sure you want to delete?");
    if(isDelete){
      this.clientService.deleteClientById(id).subscribe((res:APIResponseModel) => {
        if(res.result){
          alert("Client Deleted successfully");
          this.loadClients();
        }
        else{
          alert(res.message);
        }
      })
    }
  }}
