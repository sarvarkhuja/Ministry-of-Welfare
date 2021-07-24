import { Component, TemplateRef, ViewChild } from "@angular/core";

@Component({
  selector: "c-tab-label",
  template: "<ng-template><ng-content></ng-content></ng-template>  ",
})
export class TabLabelComponent{
  @ViewChild(TemplateRef)
  labelContent!: TemplateRef<any>;

  constructor() {}
}
