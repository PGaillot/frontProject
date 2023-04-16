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
  constructor(private dataServices: DataServicesService) {}

  faqList: faq[] = [];

  ngOnInit(): void {
    this.dataServices.getFaq().subscribe((data) => {
      const faqListData: any = data;
      this.faqList = faqListData;
    });
  }
}
