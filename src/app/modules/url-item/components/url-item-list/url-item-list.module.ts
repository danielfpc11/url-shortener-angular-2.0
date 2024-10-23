import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlItemListComponent } from './url-item-list.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    UrlItemListComponent
  ],
  exports: [
    UrlItemListComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class UrlItemListModule {
}
