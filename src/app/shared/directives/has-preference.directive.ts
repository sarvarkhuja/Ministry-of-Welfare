import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { PreferenceService } from '@core/services/preference.service';

@Directive({
  selector: '[hasPreference]',
})
export class HasPreferenceDirective implements OnInit {
  /**
   *
   */
  @Input('hasPreference')
  preferenceCode!: string;

  /**
   *
   * @param $permission Permission service
   * @param eRef Element reference to access HTML content elements
   * @param renderer Renderer to modify HTML elements
   */
  constructor(private $preference: PreferenceService, private eRef: ElementRef, private renderer: Renderer2) {}

  /**
   *
   */
  hasAccess: boolean = this.$preference.isEnabled(this.preferenceCode);

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
