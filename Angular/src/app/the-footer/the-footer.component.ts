import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonHomeComponent } from '../button-home/button-home.component';
import { ButtonFormComponent } from '../button-form/button-form.component';
import { ButtonAboutComponent } from '../button-about/button-about.component';
import { ButtonNearbyComponent } from '../button-nearby/button-nearby.component';

@Component({
  selector: 'app-the-footer',
  standalone: true,
  imports: [RouterLink, ButtonAboutComponent, ButtonFormComponent, ButtonHomeComponent, ButtonNearbyComponent],
  templateUrl: './the-footer.component.html',
  styleUrl: './the-footer.component.css'
})
export class TheFooterComponent {

}
