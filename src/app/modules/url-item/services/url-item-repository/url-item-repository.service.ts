import { Observable } from 'rxjs';
import { UrlItem } from '../../models';

export abstract class UrlItemRepositoryService {

  public abstract findAll(): Observable<UrlItem[]>;

  public abstract findById(id: number): Observable<UrlItem>;

  public abstract findUrlByShortenedUrlId(shortenedUrlId: string): Observable<string>;

  public abstract create(urlItem: UrlItem): Observable<void>;

  public abstract update(urlItem: UrlItem): Observable<void>;

  public abstract delete(id: number): Observable<void>;

}
