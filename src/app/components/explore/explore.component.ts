import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { DataServicesService } from 'src/app/services/dataServices/data-services.service';

export interface trialStep{
  title:string,
  details:string,
  imgUrl:string
}

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent {
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
      if(result.matches){
        this.xSmallScreen = true
      }
    })

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
  
  trialSteps:trialStep[] = [
    {
      title:"Aujourd'hui",
      details:"démarrez votre 1er entraînement gratuitement",
      imgUrl:"https://gitlab.com/kinomap-dev/frontproject/-/raw/master/images/lock.svg"
    },
    {
      title:"Jour 14",
      details:"abonnez-vous avec la formule de votre choix",
      imgUrl:"https://gitlab.com/kinomap-dev/frontproject/-/raw/master/images/calendar.svg"
    },
  ]

  trial = 0;
  appRate:number = 0;
  maxRate:number = 5;
  rateArray:number[] = [];

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
