import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheContainerComponent } from './the-container.component';

describe('TheContainerComponent', () => {
  let component: TheContainerComponent;
  let fixture: ComponentFixture<TheContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
