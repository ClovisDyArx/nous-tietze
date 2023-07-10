import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndpageNavbarComponent } from './endpage-navbar.component';

describe('EndpageNavbarComponent', () => {
  let component: EndpageNavbarComponent;
  let fixture: ComponentFixture<EndpageNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndpageNavbarComponent]
    });
    fixture = TestBed.createComponent(EndpageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
