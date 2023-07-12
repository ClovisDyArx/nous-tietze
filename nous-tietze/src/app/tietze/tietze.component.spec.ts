import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TietzeComponent } from './tietze.component';

describe('TietzeComponent', () => {
  let component: TietzeComponent;
  let fixture: ComponentFixture<TietzeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TietzeComponent]
    });
    fixture = TestBed.createComponent(TietzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
