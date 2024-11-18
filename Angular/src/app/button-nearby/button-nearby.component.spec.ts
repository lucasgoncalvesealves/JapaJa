import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonNearbyComponent } from './button-nearby.component';

describe('ButtonNearbyComponent', () => {
  let component: ButtonNearbyComponent;
  let fixture: ComponentFixture<ButtonNearbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonNearbyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonNearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
