import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlItemHomeComponent } from './url-item-home.component';
import { TranslateModule } from '@ngx-translate/core';
import { UrlItemListModule } from '../url-item-list';

@NgModule({
  declarations: [
    UrlItemHomeComponent
  ],
  exports: [
    UrlItemHomeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    UrlItemListModule
  ]
})
export class UrlItemHomeModule {
}
