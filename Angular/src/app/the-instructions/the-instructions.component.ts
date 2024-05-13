import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-the-instructions',
  standalone: true,
  imports: [],
  templateUrl: './the-instructions.component.html',
  styleUrl: './the-instructions.component.css'
})
export class TheInstructionsComponent {
  @Output() titleEvent = new EventEmitter<string>();

  ngOnInit() {
    setTimeout(() => {
      this.titleEvent.emit('Sobre');
    });
  }
}
