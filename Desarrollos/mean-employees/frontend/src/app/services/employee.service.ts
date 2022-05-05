import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";
import { Employee } from '../models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // url de nuestra API
  URL_API : string = "http://localhost:4000/api/employees"

  // 
  employees : Employee[];

  constructor(private http: HttpClient) { }

  getEmployees() : Observable<any>{
    return this.http.get(this.URL_API);
  }
}
