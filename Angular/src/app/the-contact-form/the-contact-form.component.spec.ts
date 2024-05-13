import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheContactFormComponent } from './the-contact-form.component';

describe('TheContactFormComponent', () => {
  let component: TheContactFormComponent;
  let fixture: ComponentFixture<TheContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheContactFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
