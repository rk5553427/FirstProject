import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  getEmployees():Observable<any>
  {
    return this.httpClient.get<any>("https://localhost:7262/api/employee");
  }
  saveEmployee(employee:Employee):Observable<any>
  {
    return this.httpClient.post<any>("https://localhost:7262/api/employee", employee);
  }
  updateEmployee(employee:Employee):Observable<Employee>
  {
    return this.httpClient.put<Employee>("https://localhost:7262/api/employee", employee);
  }
  deleteEmployee(id:number):Observable<any>
  {
    return this.httpClient.delete<any>("https://localhost:7262/api/employee/" +id);
  }

}
