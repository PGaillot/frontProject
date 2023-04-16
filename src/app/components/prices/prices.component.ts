import { Component } from '@angular/core';
import { DataServicesService } from 'src/app/services/dataServices/data-services.service';

export interface subscription{
  name: string,
  price: number,
  period: number,
  users: number,
  best_value?: boolean
}

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent {
constructor(private dataServices:DataServicesService){}

subscriptions:subscription[] = [];

ngOnInit(): void {
  this.dataServices.getSubscriptions().subscribe((data:any) => {
    this.subscriptions = data;
  })
}

}
