import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheInstructionsComponent } from './the-instructions.component';

describe('TheInstructionsComponent', () => {
  let component: TheInstructionsComponent;
  let fixture: ComponentFixture<TheInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheInstructionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
