import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheNearbyComponent } from './the-nearby.component';

describe('TheNearbyComponent', () => {
  let component: TheNearbyComponent;
  let fixture: ComponentFixture<TheNearbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheNearbyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheNearbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
