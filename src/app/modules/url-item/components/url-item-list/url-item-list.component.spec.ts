import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlItemListComponent } from './url-item-list.component';

describe('UrlItemListComponent', () => {
  let component: UrlItemListComponent;
  let fixture: ComponentFixture<UrlItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlItemListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
