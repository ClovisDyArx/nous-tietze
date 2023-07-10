import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediasComponent } from './social-medias.component';

describe('SocialMediasComponent', () => {
  let component: SocialMediasComponent;
  let fixture: ComponentFixture<SocialMediasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialMediasComponent]
    });
    fixture = TestBed.createComponent(SocialMediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
