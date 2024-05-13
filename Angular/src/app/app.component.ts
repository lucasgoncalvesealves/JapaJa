import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TheHeaderComponent } from './the-header/the-header.component';
import { TheFooterComponent } from './the-footer/the-footer.component';
import { ThePropagandaComponent } from './the-propaganda/the-propaganda.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TheHeaderComponent, TheFooterComponent, ThePropagandaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'japa-ja';
}
