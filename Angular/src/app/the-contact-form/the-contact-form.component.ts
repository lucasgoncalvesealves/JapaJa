import { Component } from '@angular/core';
import { TheSubheaderComponent } from '../the-subheader/the-subheader.component';

@Component({
  selector: 'app-the-contact-form',
  standalone: true,
  imports: [TheSubheaderComponent],
  templateUrl: './the-contact-form.component.html',
  styleUrl: './the-contact-form.component.css'
})
export class TheContactFormComponent {
  title:string = 'Contato';
}
