import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // url de nuestra API
  URL_API : string = "http://localhost:4000/api/employees"

  constructor(private http: HttpClient) { }

  getEmployees(){
    this.http.get(this.URL_API);
  }
}
