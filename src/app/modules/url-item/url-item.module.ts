import { NgModule } from '@angular/core';
import { UrlItemComponentsModule } from './components';
import { DefaultUrlItemService, UrlItemService } from './services';

@NgModule({
  imports: [
    UrlItemComponentsModule
  ],
  providers: [
    {provide: UrlItemService, useClass: DefaultUrlItemService}
  ]
})
export class UrlItemModule {
}
