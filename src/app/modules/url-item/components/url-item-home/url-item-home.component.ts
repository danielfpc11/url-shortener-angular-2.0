import { Component } from '@angular/core';
import { UrlItemConnector } from '../../connectors';
import { UrlItem } from '../../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-url-item-home',
  templateUrl: './url-item-home.component.html',
  styleUrls: ['./url-item-home.component.scss']
})
export class UrlItemHomeComponent {

  protected urlItems$!: Observable<UrlItem[]>;

  constructor(protected urlItemConnector: UrlItemConnector) {
  }

  ngOnInit(): void {
    this.urlItems$ = this.urlItemConnector.findAll();
  }

}
