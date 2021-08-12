import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainNavigationComponent {
  constructor() {}
}
