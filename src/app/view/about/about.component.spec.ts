import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ TranslateModule.forRoot({}) ],
      declarations: [ AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
