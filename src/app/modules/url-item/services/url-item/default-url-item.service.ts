import { Injectable } from '@angular/core';
import { UrlItemService } from './url-item.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlItem } from '../../models';
import { URL_ITEM_ENDPOINT } from '../../../../shared';

@Injectable({
  providedIn: 'root'
})
export class DefaultUrlItemService extends UrlItemService {

  constructor(protected httpClient: HttpClient) {
    super();
  }

  public override findAll(): Observable<UrlItem[]> {
    return this.httpClient.get<UrlItem[]>(`${URL_ITEM_ENDPOINT}/all`);
  }

  public override findById(id: number): Observable<UrlItem> {
    return this.httpClient.get<UrlItem>(`${URL_ITEM_ENDPOINT}/${id}`);
  }

  public override findUrlByShortenedUrlId(shortenedUrlId: string): Observable<string> {
    return this.httpClient.get<string>(`${URL_ITEM_ENDPOINT}/shortened/${shortenedUrlId}`, {responseType: 'text' as 'json'});
  }

  public override create(urlItem: UrlItem): Observable<void> {
    return this.httpClient.post<void>(`${URL_ITEM_ENDPOINT}/new`, urlItem);
  }

  public override update(urlItem: UrlItem): Observable<void> {
    return this.httpClient.put<void>(`${URL_ITEM_ENDPOINT}/update`, urlItem);
  }

  public override delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${URL_ITEM_ENDPOINT}/delete/${id}`);
  }

}
