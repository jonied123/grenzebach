import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchrittanleitungComponent } from './schrittanleitung.component';

describe('SchrittanleitungComponent', () => {
  let component: SchrittanleitungComponent;
  let fixture: ComponentFixture<SchrittanleitungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchrittanleitungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchrittanleitungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
