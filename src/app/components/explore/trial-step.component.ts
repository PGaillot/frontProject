import { Component, Input } from '@angular/core';
import { trialStep } from './explore.component';

@Component({
  selector: 'app-trial-step',
  template: `
    <div id="container">
      <div id="circle">
        <span id="pin"><span>{{trialNumber +1 }}</span></span>
        <img [src]=trialStep.imgUrl alt="">
      </div>
      <div id="content">
        <span id="title">{{trialStep.title}}</span>
        <p>{{trialStep.details}}</p>
      </div>
    </div>
  `,
  styleUrls:['./trial-step.component.scss']
})
export class TrialStepComponent {
  @Input() trialNumber:number = 0;
  @Input() trialStep!:trialStep;
}
