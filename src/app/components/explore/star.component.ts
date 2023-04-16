import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  template: `
    <div>
      <img [src]="emptyStarLink" alt="" />
      <div id="full-star-container" [ngStyle]="{'width': rate +'em'}">
        <img [src]="starLink" alt="" />
      </div>
    </div>
  `,
  styles: ['div{position: relative;img{height: 1em;width:  1em;}#full-star-container{position: absolute;top: 0;left: 0;overflow: hidden;}}'],
})
export class StarComponent {
  @Input() rate: number = 0;

  emptyStarLink: string =
    'https://gitlab.com/kinomap-dev/frontproject/-/raw/master/images/emptyStar.svg';
  starLink: string =
    'https://gitlab.com/kinomap-dev/frontproject/-/raw/master/images/star.svg';
}
