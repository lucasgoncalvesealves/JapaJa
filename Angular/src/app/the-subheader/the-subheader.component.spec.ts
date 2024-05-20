import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSubheaderComponent } from './the-subheader.component';

describe('TheSubheaderComponent', () => {
  let component: TheSubheaderComponent;
  let fixture: ComponentFixture<TheSubheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheSubheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheSubheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
