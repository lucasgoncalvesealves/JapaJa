import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePropagandaComponent } from './the-propaganda.component';

describe('ThePropagandaComponent', () => {
  let component: ThePropagandaComponent;
  let fixture: ComponentFixture<ThePropagandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThePropagandaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThePropagandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
