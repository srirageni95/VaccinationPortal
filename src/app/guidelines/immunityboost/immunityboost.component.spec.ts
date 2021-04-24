import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmunityboostComponent } from './immunityboost.component';

describe('ImmunityboostComponent', () => {
  let component: ImmunityboostComponent;
  let fixture: ComponentFixture<ImmunityboostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmunityboostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmunityboostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
