import { Router } from '@angular/router';
import { Menu } from './../../../../core/models/types/menu.model';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MENU_ITEMS } from './menu';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  /**
   * Defines if sidebar is shown or hidden via menu component
   */
  @Input()
  sidebar!: boolean;

  /**
   * Emitted on close button click
   */
  @Output()
  sidebarChange = new EventEmitter();

  /**
   * Menu list to be displayed in tree view
   */
  menu!: Menu[];

  /**
   * Currently chosen menu item
   */
  currentMenuItem!: Menu;

  /**
   *
   */
  constructor(private router: Router) {}

  /**
   *
   */
  ngOnInit(): void {
    this.menu = MENU_ITEMS;
    this.currentMenuItem = this.menu[0];
  }

  /**
   * Closes sidebar menu on X click or when click outside the menu
   */
  public closeSidebarMenu(): void {
    this.sidebarChange.emit(false);
  }

  /**
   * Called on menu item click
   * @param event event emitted on menu item click
   */
  public selectItem(event: any) {
    this.currentMenuItem = event.itemData;

    this.navigateToSelectedPage();
  }

  /**
   * Navigates to chosen page if route is provided
   */
  private navigateToSelectedPage(): void {
    if (this.currentMenuItem.route) {
      this.router.navigate([this.currentMenuItem.route]);
    }
  }
}
