import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { DataServicesService } from 'src/app/services/dataServices/data-services.service';

export interface subscription {
  name: string;
  price: number;
  period: number;
  users: number;
  best_value?: boolean;
}

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss'],
})
export class PricesComponent {
  constructor(
    private dataServices: DataServicesService,
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
      if (result.matches) {
        this.xSmallScreen = true;
      }
    });

    this.dataServices.getSubscriptions().subscribe((data: any) => {
      this.subscriptions = data;
    });
  }

  subscriptions: subscription[] = [];

}
