import { Component, input } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-contact',
  imports: [StarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  title: string = 'contact component';

  customColor: string = '#1a252f';

}
