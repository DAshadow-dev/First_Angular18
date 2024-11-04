import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { APIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http : HttpClient) { }

  getAllClients() : Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL +'GetAllClients');
  }

  addUpdate(obj:Client) : Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL +'AddUpdateClient',obj);
  }

  deleteClientById(id : number) : Observable<APIResponseModel>{
    return this.http.delete<APIResponseModel>(environment.API_URL +'DeleteClientByClientId?clientId='+id);
  }

  getAllEmployees() : Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(environment.API_URL +'GetAllEmployee');
  }

  addClientProjectUpdate(obj:Client) : Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(environment.API_URL +'AddUpdateClientProject',obj);
  }
}
