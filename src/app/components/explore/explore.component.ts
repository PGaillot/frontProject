import { Component } from '@angular/core';
import { DataServicesService } from 'src/app/services/dataServices/data-services.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent {
  constructor(private dataServices: DataServicesService) {}
  
  trial = 0;
  appRate:number = 0;
  maxRate:number = 5;
  rateArray:number[] = [];

  ngOnInit(): void {

    this.dataServices.getScore().subscribe(
      (rate:any) => {
        this.appRate = rate;
        this.initRateArray(rate)
      }
    );

    this.dataServices.getTrial().subscribe( 
      (trial:any) => this.trial = trial
    );
  }

  initRateArray(rate:number){
    for(let i = 0; i < this.maxRate; i++){
      if(rate - 1 > 0){
        rate-=1;
        this.rateArray.push(1);
      } else {
        this.rateArray.push(rate)
      }
    }
  }


}
