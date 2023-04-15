import { Component } from "@angular/core";

@Component({
    selector: 'app-accordion',
    template:` 
    <mat-accordion id="accordion">
    <mat-expansion-panel hideToggle>
      <mat-expansion-panel-header>
        <mat-panel-description>
          Comment connecter mon équipement pour la première fois ?
          <div id="add-icon">
            <span></span>
            <span id="vertical"></span>
          </div>
        </mat-panel-description>
      </mat-expansion-panel-header>
      content
    </mat-expansion-panel>
  </mat-accordion>`,
    styleUrls:['./accordion.component.scss']
})
export class AccordionComponent{}