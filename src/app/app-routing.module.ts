import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlItemHomeComponent } from './modules';

const routes: Routes = [
  {path: '', component: UrlItemHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
