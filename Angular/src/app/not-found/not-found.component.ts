import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  @Output() titleEvent = new EventEmitter<string>();

  ngOnInit() {
    setTimeout(() => {
      this.titleEvent.emit('Erro 404');
    });
  }
}
