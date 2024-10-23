import { Injectable } from '@angular/core';
import { UrlItemService } from '../services';
import { map, Observable } from 'rxjs';
import { UrlItem } from '../models';
import { UrlItemAdapter } from '../adapters';

@Injectable({
  providedIn: 'root'
})
export class UrlItemConnector {

  constructor(protected urlItemService: UrlItemService) {
  }

  public findAll(): Observable<UrlItem[]> {
    return this.urlItemService
               .findAll()
               .pipe(map((dataList: any[]): UrlItem[] => dataList.map((data: any): UrlItem => UrlItemAdapter.adaptResponseBody(data))));
  }

  public findById(id: number): Observable<UrlItem> {
    return this.urlItemService
               .findById(id)
               .pipe(map((data: any): UrlItem => UrlItemAdapter.adaptResponseBody(data)));
  }

  public findUrlByShortenedUrlId(shortenedUrlId: string): Observable<string> {
    return this.urlItemService.findUrlByShortenedUrlId(shortenedUrlId);
  }

  public create(urlItem: UrlItem): Observable<void> {
    return this.urlItemService.create(UrlItemAdapter.adaptRequestBody(urlItem));
  }

  public update(urlItem: UrlItem): Observable<void> {
    return this.urlItemService.update(UrlItemAdapter.adaptRequestBody(urlItem));
  }

  public delete(id: number): Observable<void> {
    return this.urlItemService.delete(id);
  }

}
