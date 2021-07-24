import { SetLookup } from './../../store/lookups/lookups.action';
import { Store } from '@ngxs/store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutocompleteService {
  /**
   *
   */
  constructor(private store: Store) {}

  /**
   *
   */
  storeLookup(lookupCacheName: string, lookupValues: any): void {
    this.store.dispatch(new SetLookup(lookupCacheName, lookupValues));
  }
}
