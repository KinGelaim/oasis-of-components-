import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OasisTabsComponent } from 'oasis-tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OasisTabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-components-oasis-preview';
}