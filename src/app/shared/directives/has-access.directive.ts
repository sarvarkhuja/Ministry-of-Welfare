import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { PermissionService } from '@core/services/permission.service';

@Directive({
  selector: '[hasAccess]',
})
export class HasAccessDirective implements OnInit {
  /**
   *
   */
  @Input('hasAccess')
  permissionCode!: string;

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
  hasAccess: boolean = this.$permission.hasPermission(this.permissionCode);

  /**
   *
   */
  ngOnInit(): void {
    if (!this.hasAccess) {
      if (this.eRef.nativeElement.style.display) {
        this.renderer.removeClass(this.eRef, 'display');
      } else {
        this.eRef.nativeElement.style.display = 'none';
      }
    }
  }
}
