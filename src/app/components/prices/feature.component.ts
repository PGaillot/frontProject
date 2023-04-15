import { Component } from "@angular/core";

@Component({
    selector:'app-feature',
    template:`
        <body>
            <div class="marker"></div>
            <span><ng-content></ng-content></span>
        </body>
    `,
    styleUrls:['./feature.component.scss']
})
export class FeatureComponent{

}