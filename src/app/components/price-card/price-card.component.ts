import { Component, Input } from '@angular/core';
import { subscription } from '../prices/prices.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss'],
})
export class PriceCardComponent {

  constructor(
    private responsive: BreakpointObserver
  ) {}

  xSmallScreen: boolean = false;

  ngOnInit(): void {

    this.responsive.observe(Breakpoints.XSmall).subscribe((result) => {
      this.xSmallScreen = false;
      if(result.matches){
        this.xSmallScreen = true
      }
    })

    this.initPeriod(this.subscription.period);

  }

  @Input() subscription!: subscription;
  period: string = '';

  initPeriod(period: number) {
    switch (period) {
      case 1:
        this.period = 'mois';
        break;
      case 12:
        this.period = 'an';
        break;
      case 99:
        this.period = 'à vie';
        break;
    }
  }
}
