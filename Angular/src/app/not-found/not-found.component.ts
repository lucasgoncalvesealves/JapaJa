import { Component } from '@angular/core';
import { TheSubheaderComponent } from '../the-subheader/the-subheader.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [TheSubheaderComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  title:string = 'Erro 404';
}
