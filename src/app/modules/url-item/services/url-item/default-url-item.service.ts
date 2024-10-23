import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlItem } from '../../models';
import { URL_ITEM_ENDPOINT } from '../../../../shared';
import { UrlItemService } from './url-item.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultUrlItemService implements UrlItemService {

  constructor(protected httpClient: HttpClient) {
  }

  public findAll(): Observable<UrlItem[]> {
    return this.httpClient.get<UrlItem[]>(`${URL_ITEM_ENDPOINT}/all`);
  }

  public findById(id: number): Observable<UrlItem> {
    return this.httpClient.get<UrlItem>(`${URL_ITEM_ENDPOINT}/${id}`);
  }

  public findUrlByShortenedUrlId(shortenedUrlId: string): Observable<string> {
    return this.httpClient.get<string>(`${URL_ITEM_ENDPOINT}/shortened/${shortenedUrlId}`, {responseType: 'text' as 'json'});
  }

  public create(urlItem: UrlItem): Observable<void> {
    return this.httpClient.post<void>(`${URL_ITEM_ENDPOINT}/new`, urlItem);
  }

  public update(urlItem: UrlItem): Observable<void> {
    return this.httpClient.put<void>(`${URL_ITEM_ENDPOINT}/update`, urlItem);
  }

  public delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${URL_ITEM_ENDPOINT}/delete/${id}`);
  }

}
