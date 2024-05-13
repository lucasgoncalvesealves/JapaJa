import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-the-container',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './the-container.component.html',
  styleUrl: './the-container.component.css'
})
export class TheContainerComponent {
  title: string = '';

  receiveTitle(newTitle: any) {
    newTitle.titleEvent.subscribe((res: string) => this.title = res);
  }
}
