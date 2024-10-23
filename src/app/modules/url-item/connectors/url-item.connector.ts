import { Injectable } from '@angular/core';
import { UrlItemService } from '../services';
import { Observable } from 'rxjs';
import { UrlItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UrlItemConnector {

  constructor(protected urlItemService: UrlItemService) {
  }

  public findAll(): Observable<UrlItem[]> {
    return this.urlItemService.findAll();
  }

  public findById(id: number): Observable<UrlItem> {
    return this.urlItemService.findById(id);
  }

  public findUrlByShortenedUrlId(shortenedUrlId: string): Observable<string> {
    return this.urlItemService.findUrlByShortenedUrlId(shortenedUrlId);
  }

  public create(urlItem: UrlItem): Observable<void> {
    return this.urlItemService.create(urlItem);
  }

  public update(urlItem: UrlItem): Observable<void> {
    return this.urlItemService.update(urlItem);
  }

  public delete(id: number): Observable<void> {
    return this.urlItemService.delete(id);
  }

}
