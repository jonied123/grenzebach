import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandfernbedienungComponent } from './handfernbedienung.component';

describe('HandfernbedienungComponent', () => {
  let component: HandfernbedienungComponent;
  let fixture: ComponentFixture<HandfernbedienungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandfernbedienungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandfernbedienungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
