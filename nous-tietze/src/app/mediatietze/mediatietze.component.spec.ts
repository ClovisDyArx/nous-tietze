import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediatietzeComponent } from './mediatietze.component';

describe('MediatietzeComponent', () => {
  let component: MediatietzeComponent;
  let fixture: ComponentFixture<MediatietzeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediatietzeComponent]
    });
    fixture = TestBed.createComponent(MediatietzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
