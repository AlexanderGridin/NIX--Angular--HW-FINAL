import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTitleComponent {
  constructor() {}
}
