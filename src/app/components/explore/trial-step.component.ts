import { Component } from '@angular/core';

@Component({
  selector: 'app-trial-step',
  template: `
    <div id="container">
      <div id="circle">
        <span id="pin"><span>1</span></span>
        <img src="https://gitlab.com/kinomap-dev/frontproject/-/raw/master/images/lock.svg" alt="">
      </div>
      <div id="content">
        <span id="title">Aujourd'hui</span>
        <p>démarrez votre 1er entraînement gratuitement</p>
      </div>
    </div>
  `,
  styleUrls:['./trial-step.component.scss']
})
export class TrialStepComponent {}
