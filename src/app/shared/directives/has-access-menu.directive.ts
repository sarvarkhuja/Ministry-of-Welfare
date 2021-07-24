import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';
import { PermissionService } from '@core/services/permission.service';

@Directive({
  selector: '[hasAccessMenu]',
})
export class HasAccessMenuDirective implements OnInit {
  /**
   *
   */
  @Input('hasAccessMenu')
  entryCode!: string[] | undefined;

  hasAccess!: boolean;
  /**
   *
   * @param $permission Permission service
   * @param eRef Element reference to access HTML content elements
   * @param renderer Renderer to modify HTML elements
   */
  constructor(private $permission: PermissionService, private eRef: ElementRef, private renderer: Renderer2) {}

  /**
   *
   */

  /**
   *
   */
  ngOnInit(): void {
    if (this.entryCode) {
      this.hasAccess = this.$permission.hasAccessToMenu(this.entryCode[0]);
      if (!this.hasAccess) {
        if (this.eRef.nativeElement.style.display) {
          this.renderer.removeClass(this.eRef, 'display');
        } else {
          this.eRef.nativeElement.style.display = 'none';
        }
      }
    }
  }
}
