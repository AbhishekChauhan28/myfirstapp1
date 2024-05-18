import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

console.log("Student component is loaded...!!")
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

}
