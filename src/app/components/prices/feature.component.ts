import { Component } from "@angular/core";

@Component({
    selector:'app-feature',
    template:`
        <body>
            <div class="marker"></div>
            <span><ng-content></ng-content></span>
        </body>
    `,
    styles:['body{display:flex; flex-direction:row;gap:1em}.marker{background-color:#FFC947; height:1em; min-width:1em; border-radius:1em;}']
})
export class FeatureComponent{

}