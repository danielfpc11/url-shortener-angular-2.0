import { Component, Input, OnDestroy } from '@angular/core';
import { UrlItem } from '../../models';
import { Subscription, tap } from 'rxjs';
import { UrlItemConnector } from '../../connectors';
import { ClipboardService } from '../../../../shared';

@Component({
  selector: 'url-item-list',
  templateUrl: './url-item-list.component.html',
  styleUrls: ['./url-item-list.component.scss']
})
export class UrlItemListComponent implements OnDestroy {

  @Input() urlItems!: UrlItem[];
  protected subscription: Subscription = new Subscription();

  constructor(protected urlItemConnector: UrlItemConnector,
              protected clipboardService: ClipboardService) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  protected copyShortenedUrlToClipboard(shortenedUrlId: string): void {
    this.subscription.add(this.clipboardService
                              .copyToClipboard(this.getShortenedUrl(shortenedUrlId))
                              .subscribe());
  }

  protected deleteUrlItem(id: number): void {
    this.subscription.add(this.urlItemConnector
                              .delete(id)
                              .pipe(tap((): void => this.deleteUrlItemFromList(id)))
                              .subscribe());
  }

  private getShortenedUrl(shortenedUrlId: string): string {
    return `${location.origin}/shortened/${shortenedUrlId}`;
  }

  private deleteUrlItemFromList(id: number): void {
    this.urlItems = this.urlItems.filter((urlItem: UrlItem): boolean => urlItem.id !== id);
  }

}
