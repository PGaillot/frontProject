import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
})
export class StarterComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  public navigateAnchor(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
