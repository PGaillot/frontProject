import { Component } from "@angular/core";

@Component({
    selector:'app-feature',
    template:`
        <body>
            <div class="marker">
                <span class="check-icon part-a"></span>
                <span class="check-icon part-b"></span>
            </div>
            <span><ng-content></ng-content></span>
        </body>
    `,
    styleUrls:['./feature.component.scss']
})
export class FeatureComponent{


}