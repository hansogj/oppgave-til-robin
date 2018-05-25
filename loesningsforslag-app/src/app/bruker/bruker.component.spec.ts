import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrukerComponent } from './bruker.component';

describe('BrukerComponent', () => {
  let component: BrukerComponent;
  let fixture: ComponentFixture<BrukerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrukerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrukerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
