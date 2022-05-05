import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {


  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployee();

  }

getEmployee() : void {
  this.employeeService.getEmployees().subscribe({
    next : data =>{
      console.log("Empleado Obtenido", data);
    },
    error : error => {
      console.log("Error al obtener empleado",error);
    }    
  })
}
  


}
