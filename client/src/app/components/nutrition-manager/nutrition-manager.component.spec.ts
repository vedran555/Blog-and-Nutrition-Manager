import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionManagerComponent } from './nutrition-manager.component';

describe('NutritionManagerComponent', () => {
  let component: NutritionManagerComponent;
  let fixture: ComponentFixture<NutritionManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
