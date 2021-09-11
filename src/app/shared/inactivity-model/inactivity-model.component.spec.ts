import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InactivityModelComponent } from './inactivity-model.component';

describe('InactivityModelComponent', () => {
  let component: InactivityModelComponent;
  let fixture: ComponentFixture<InactivityModelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InactivityModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InactivityModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
