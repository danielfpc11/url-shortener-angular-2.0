import { UrlItem } from '../models';

export class UrlItemAdapter {

  static adaptResponseBody(data: any): UrlItem {
    return {
      id: data.id,
      url: data.url,
      shortenedUrlId: data.shortenedUrlId,
      description: data.description
    };
  }

  static adaptRequestBody(urlItem: UrlItem): any {
    return {
      id: urlItem.id,
      url: urlItem.url,
      shortenedUrlId: urlItem.shortenedUrlId,
      description: urlItem.description
    };
  }

}
