import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { DataServicesService } from 'src/app/services/dataServices/data-services.service';

export interface faq {
  title: string;
  details: string;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
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


    this.dataServices.getFaq().subscribe((data) => {
      const faqListData: any = data;
      this.faqList = faqListData;
    });
  }

  faqList: faq[] = [];

}
