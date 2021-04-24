import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidhelpComponent } from './covidhelp.component';

describe('CovidhelpComponent', () => {
  let component: CovidhelpComponent;
  let fixture: ComponentFixture<CovidhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
