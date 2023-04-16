import { Component, Input } from "@angular/core";
import {faq} from "./faq.component";

@Component({
    selector: 'app-accordion',
    template:` 
    <mat-accordion id="accordion">
    <mat-expansion-panel hideToggle>
      <mat-expansion-panel-header>
        <mat-panel-description>
          {{faq.title}}
          <div id="add-icon">
            <span></span>
            <span id="vertical"></span>
          </div>
        </mat-panel-description>
      </mat-expansion-panel-header>
      {{faq.details}}
    </mat-expansion-panel>
  </mat-accordion>`,
    styleUrls:['./accordion.component.scss']
})
export class AccordionComponent{
  @Input() faq!:faq;
}