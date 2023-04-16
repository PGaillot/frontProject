import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gift-card',
  templateUrl: './gift-card.component.html',
  styleUrls: ['./gift-card.component.scss']
})
export class GiftCardComponent {

  constructor(
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
}
