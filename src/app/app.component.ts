import { Component, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';

console.log("App component is loaded...!!");
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myfirstapp1' + VERSION.major;
}
