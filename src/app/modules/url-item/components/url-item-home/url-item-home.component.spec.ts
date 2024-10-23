import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlItemHomeComponent } from './url-item-home.component';

describe('UrlItemHomeComponent', () => {
  let component: UrlItemHomeComponent;
  let fixture: ComponentFixture<UrlItemHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlItemHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlItemHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
