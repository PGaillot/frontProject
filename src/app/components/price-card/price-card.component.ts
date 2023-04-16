import { Component, Input } from '@angular/core';
import { subscription } from '../prices/prices.component';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss'],
})
export class PriceCardComponent {
  @Input() subscription!: subscription;
  period: string = '';

  ngOnInit(): void {
    this.initPeriod(this.subscription.period);
  }
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
