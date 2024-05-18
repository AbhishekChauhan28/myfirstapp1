import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

console.log("Employee Component is loaded...!!")
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

}
