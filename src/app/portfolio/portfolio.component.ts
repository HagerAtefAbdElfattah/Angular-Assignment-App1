import { Component } from '@angular/core';
import { StarComponent } from '../star/star.component';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-portfolio',
  imports: [StarComponent, CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  title: string = 'Portfolio component';

  customColor: string = '#1a252f';
}
