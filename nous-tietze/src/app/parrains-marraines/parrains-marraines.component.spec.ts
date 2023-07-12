import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrainsMarrainesComponent } from './parrains-marraines.component';

describe('ParrainsMarrainesComponent', () => {
  let component: ParrainsMarrainesComponent;
  let fixture: ComponentFixture<ParrainsMarrainesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParrainsMarrainesComponent]
    });
    fixture = TestBed.createComponent(ParrainsMarrainesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
