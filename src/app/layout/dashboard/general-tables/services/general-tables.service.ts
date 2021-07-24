import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { EntityService } from './../../../../core/services/base/entity.service';
import { EndpointSettings } from './../../../../core/configs/endpoint.settings';
import { GeneralTable } from '../models/general-table.model';
import { UpdateTableEntryRequestBody } from '../models/update-table-entry-request-body.model';
import { AddTableEntryRequestBody } from '../models/add-table-entry-request-body.model';
import { GeneralTableEntry } from '../models/general-table-entry.model';
import { GeneralTableEntryQuery } from '../models/general-table-entry-query.model';
import { HttpParams } from '@angular/common/http';
import { GridResult } from 'src/app/core/configs/grid-result';

@Injectable({
  providedIn: 'root',
})
export class GeneralTablesService extends EntityService {
  /**
   *
   */
  constructor() {
    super();
  }

  public getTables(): Observable<GeneralTable[]> {
    return this.http.get<GeneralTable[]>(this.baseUrl + EndpointSettings.GET_GENERAL_TABLES).pipe(map((res) => res), shareReplay(1));
  }

  public getTableEntries(query: GeneralTableEntryQuery): Observable<GridResult> {
    const params = new HttpParams().append('query', query.query);
    return this.http
      .get<GridResult>(this.baseUrl + EndpointSettings.GET_GENERAL_TABLE_ENTRIES, { params });
  }

  public updateTableEntry(body: UpdateTableEntryRequestBody): Observable<any> {
    return this.http.post<any>(this.baseUrl + EndpointSettings.UPDATE_GENERAL_TABLE_ENTRY, body);
  }

  public addTableEntry(body: AddTableEntryRequestBody): Observable<any> {
    return this.http.post<any>(this.baseUrl + EndpointSettings.ADD_GENERAL_TABLE_ENTRY, body);
  }
}
