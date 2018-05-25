import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamtalerComponent } from './samtaler.component';

describe('SamtalerComponent', () => {
  let component: SamtalerComponent;
  let fixture: ComponentFixture<SamtalerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamtalerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamtalerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
