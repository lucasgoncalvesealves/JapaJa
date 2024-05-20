import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-the-subheader',
  standalone: true,
  imports: [],
  templateUrl: './the-subheader.component.html',
  styleUrl: './the-subheader.component.css'
})
export class TheSubheaderComponent {
  @Input() title: string = '';
}
