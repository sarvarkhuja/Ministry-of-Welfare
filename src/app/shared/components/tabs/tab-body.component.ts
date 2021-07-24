import { Component, TemplateRef, ViewChild } from "@angular/core";

@Component({
  selector: "c-tab-body",
  template: "<ng-template><ng-content></ng-content></ng-template>"
})
export class TabBodyComponent{
  @ViewChild(TemplateRef)
  bodyContent!: TemplateRef<any>;

  constructor() {}

}
