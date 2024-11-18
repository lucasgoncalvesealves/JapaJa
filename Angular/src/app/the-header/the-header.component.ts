import { Component } from '@angular/core';
import { ButtonHomeComponent } from '../button-home/button-home.component';
import { ButtonLogoComponent } from '../button-logo/button-logo.component';
import { ButtonFormComponent } from '../button-form/button-form.component';
import { ButtonNearbyComponent } from '../button-nearby/button-nearby.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-the-header',
  standalone: true,
  imports: [ButtonHomeComponent, ButtonLogoComponent, ButtonFormComponent, ButtonNearbyComponent, SearchBarComponent],
  templateUrl: './the-header.component.html',
  styleUrl: './the-header.component.css'
})
export class TheHeaderComponent {

}
