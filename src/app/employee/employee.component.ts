import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  employeesList:Employee[]=[];
newEmployee:Employee=new Employee();
editEmployee:Employee=new Employee();
constructor(private employeeServices:EmployeeService){}
ngOnInit()
{
  this.getAll();
}
getAll()
{
  this.employeeServices.getEmployees().subscribe(
    (response)=>{
      this.employeesList=response;
      console.log(this.employeesList);
    },
    (error)=>{
      console.log('unable to fetch data')
    }
  );
}
clearRec(){
  this.newEmployee.name="";
  this.newEmployee.address="";
  this.newEmployee.salary=0;

}
saveClick()
{
  if(this.newEmployee.name=="") return;
    if(this.newEmployee.address=="") return;
      if(this.newEmployee.salary==0) return;
   
    this.employeeServices.saveEmployee(this.newEmployee).subscribe(
      (response)=>{
        alert('data saved');
        this.getAll();
        this.clearRec();
      },
      (error)=>{
        console.log('data not save');
      }
   );
} 

editClick(emp:any)
{
this.editEmployee=emp;
}
updateClick()
{
this.employeeServices.updateEmployee(this.editEmployee).subscribe(
  (response)=>{
    alert('data saved');
    this.getAll();
  },
  (error)=>{
    console.log('data not update');
  }
);
}
deleteClick(id:number)
{
  // alert(id);
  let ans=window.confirm('Want to delete data ?');
  if(!ans) return;
  this.employeeServices.deleteEmployee(id).subscribe(
    (response)=>{
      alert('data deleted');
      this.getAll();
    },
    (error)=>{
     console.log('data not deleted');
    }
  );
}
}
