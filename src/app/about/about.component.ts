import { Component, Input } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-about',
  imports: [StarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
  title: string = 'about component';

  customColor: string = 'white';

}
