import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageContentComponent {
  constructor() {}
}
