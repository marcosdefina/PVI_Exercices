import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CGIBINComponent } from './cgibin.component';

describe('CGIBINComponent', () => {
  let component: CGIBINComponent;
  let fixture: ComponentFixture<CGIBINComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CGIBINComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CGIBINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
