import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorlogComponent } from './errorlog.component';

describe('ErrorlogComponent', () => {
  let component: ErrorlogComponent;
  let fixture: ComponentFixture<ErrorlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
