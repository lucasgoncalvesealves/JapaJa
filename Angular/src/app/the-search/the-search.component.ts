import { Component } from '@angular/core';
import { TheSubheaderComponent } from '../the-subheader/the-subheader.component';

@Component({
  selector: 'app-the-search',
  standalone: true,
  imports: [TheSubheaderComponent],
  templateUrl: './the-search.component.html',
  styleUrl: './the-search.component.css'
})
export class TheSearchComponent {
  title:string = 'Resultados';
}
