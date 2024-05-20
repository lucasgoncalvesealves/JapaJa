import { Component } from '@angular/core';
import { TheSubheaderComponent } from '../the-subheader/the-subheader.component';

@Component({
  selector: 'app-the-instructions',
  standalone: true,
  imports: [TheSubheaderComponent],
  templateUrl: './the-instructions.component.html',
  styleUrl: './the-instructions.component.css'
})
export class TheInstructionsComponent {
  title:string = 'Sobre';
}
