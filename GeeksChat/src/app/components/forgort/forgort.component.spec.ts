import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgortComponent } from './forgort.component';

describe('ForgortComponent', () => {
  let component: ForgortComponent;
  let fixture: ComponentFixture<ForgortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgortComponent]
    });
    fixture = TestBed.createComponent(ForgortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
