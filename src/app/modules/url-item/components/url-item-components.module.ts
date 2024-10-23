import { NgModule } from '@angular/core';
import { UrlItemHomeModule } from './url-item-home';
import { UrlItemListModule } from './url-item-list';

@NgModule({
  imports: [
    UrlItemHomeModule,
    UrlItemListModule
  ]
})
export class UrlItemComponentsModule {
}
