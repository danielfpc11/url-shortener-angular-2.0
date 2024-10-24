import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UrlItemModule } from './modules';
import { AppI18nModule } from './app-i18n.module';
import { SharedModule } from './shared';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppI18nModule,
    HttpClientModule,
    SharedModule,
    UrlItemModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
