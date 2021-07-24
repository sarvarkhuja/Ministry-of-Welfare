import { PipeTransform } from '@angular/core';
export interface BreadcrumbConfig {
  translation?: BreadcrumbTranslationConfig;
}

export interface BreadcrumbTranslationConfig {
  getter?: (key: string) => string | PipeTransform;
}
