import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-the-nearby',
  standalone: true,
  imports: [],
  templateUrl: './the-nearby.component.html',
  styleUrl: './the-nearby.component.css'
})
export class TheNearbyComponent {
  @Output() titleEvent = new EventEmitter<string>();

  ngOnInit() {
    setTimeout(() => {
      this.titleEvent.emit('Por Perto');
    });
  }
}
