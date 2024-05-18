import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

console.log("Employee Component..!!")
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

}
