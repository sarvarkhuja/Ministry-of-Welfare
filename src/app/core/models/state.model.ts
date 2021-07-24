import { State, SortDescriptor, CompositeFilterDescriptor, GroupDescriptor } from '@progress/kendo-data-query';

export class StateModel implements State {
  /**
   * The number of records to be skipped by the pager
   */
  skip?: number;

  /**
   * The number of records to take
   */
  take?: number;

  /**
   * The descriptors used for sorting
   */
  sort?: Array<SortDescriptor>;

  /**
   * The descriptors used for filtering
   */
  filter?: CompositeFilterDescriptor;

  /**
   * The descriptors used for grouping
   */
  group?: Array<GroupDescriptor>;

  /**
   * The value passed in the search field
   */
  searchText?: string;
}
