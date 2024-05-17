import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-the-search',
  standalone: true,
  imports: [],
  templateUrl: './the-search.component.html',
  styleUrl: './the-search.component.css'
})
export class TheSearchComponent {
  @Output() titleEvent = new EventEmitter<string>();

  ngOnInit() {
    setTimeout(() => {
      this.titleEvent.emit('Resultados');
    });
  }
}
