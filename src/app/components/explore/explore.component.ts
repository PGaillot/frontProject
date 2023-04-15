import { Component } from '@angular/core';
import { DataServicesService } from 'src/app/services/dataServices/data-services.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent {
  constructor(private dataServices: DataServicesService) {}
  appRate = ""
  trial = "0"
  ngOnInit(): void {

    const scoreObs = this.dataServices.getScore();
    const trialObs = this.dataServices.getTrial();

    scoreObs.subscribe(
      rate => this.appRate += rate
    );

    trialObs.subscribe( 
      trial => this.trial = trial + ""
       )
  }
}
