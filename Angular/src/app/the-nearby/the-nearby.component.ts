import { Component } from '@angular/core';
import { TheSubheaderComponent } from '../the-subheader/the-subheader.component';

@Component({
  selector: 'app-the-nearby',
  standalone: true,
  imports: [TheSubheaderComponent],
  templateUrl: './the-nearby.component.html',
  styleUrl: './the-nearby.component.css'
})
export class TheNearbyComponent {
  title:string = 'Por Perto';
}
