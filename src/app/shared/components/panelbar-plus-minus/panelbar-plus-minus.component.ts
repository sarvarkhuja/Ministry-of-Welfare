import { Component, Input, OnInit } from '@angular/core';
import { PanelBarItemModel } from '@progress/kendo-angular-layout';

export type PanelBarItemNative = { title: string; content: any; expanded: boolean };

@Component({
  selector: 'panelbar-plus-minus',
  templateUrl: './panelbar-plus-minus.component.html',
  styleUrls: ['./panelbar-plus-minus.component.scss'],
})
export class PanelbarPlusMinusComponent implements OnInit {
  /**
   *
   */
  @Input()
  items!: Array<PanelBarItemNative>;

  /**
   *
   */
  panelBarItemData!: Array<PanelBarItemModel>;

  /**
   *
   */
  constructor() {}

  /**
   *
   */
  ngOnInit(): void {
    this.panelBarItemData = this.items as Array<PanelBarItemModel>;
  }
}
