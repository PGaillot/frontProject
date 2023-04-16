import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
})
export class StarterComponent {
  constructor(
    private viewportScroller: ViewportScroller,
    private responsive: BreakpointObserver
  ) {}

  smallScreen: boolean = false;
  xSmallScreen: boolean = false;

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.Small).subscribe((result) => {
      this.smallScreen = false;
      if (result.matches) {
        this.smallScreen = true;
      }
    });

    this.responsive.observe(Breakpoints.XSmall).subscribe((result) => {
      this.xSmallScreen = false;
      if(result.matches){
        this.xSmallScreen = true
      }
    })
  }

  public navigateAnchor(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
