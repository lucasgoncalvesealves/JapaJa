import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-the-contact-form',
  standalone: true,
  imports: [],
  templateUrl: './the-contact-form.component.html',
  styleUrl: './the-contact-form.component.css'
})
export class TheContactFormComponent {
  @Output() titleEvent = new EventEmitter<string>();

  ngOnInit() {
    setTimeout(() => {
      this.titleEvent.emit('Contato');
    });
  }
}
