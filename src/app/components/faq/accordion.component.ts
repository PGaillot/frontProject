import { Component, Input } from '@angular/core';
import { faq } from './faq.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-accordion',
  template: `<mat-accordion
    id="accordion"
    [ngClass]="{ xSmallScreen: xSmallScreen }"
  >
    <mat-expansion-panel class="mat-elevation-z0" hideToggle>
      <mat-expansion-panel-header>
        <mat-panel-description>
          {{ faq.title }}
          <div id="add-icon">
            <span></span>
            <span id="vertical"></span>
          </div>
        </mat-panel-description>
      </mat-expansion-panel-header>
      {{ faq.details }}
    </mat-expansion-panel>
  </mat-accordion>`,
  styleUrls: ['./accordion.component.scss'],
})


export class AccordionComponent {
  @Input() faq!: faq;

  constructor(private responsive: BreakpointObserver) {}

  smallScreen: boolean = false;
  xSmallScreen: boolean = false;

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.XSmall).subscribe((result) => {
      this.xSmallScreen = false;
      if (result.matches) {
        this.xSmallScreen = true;
      }
    });
  }
}
