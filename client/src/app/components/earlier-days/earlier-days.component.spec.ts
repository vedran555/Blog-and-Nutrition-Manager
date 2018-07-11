import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlierDaysComponent } from './earlier-days.component';

describe('EarlierDaysComponent', () => {
  let component: EarlierDaysComponent;
  let fixture: ComponentFixture<EarlierDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarlierDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlierDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
