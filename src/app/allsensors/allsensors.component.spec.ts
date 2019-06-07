import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsensorsComponent } from './allsensors.component';

describe('AllsensorsComponent', () => {
  let component: AllsensorsComponent;
  let fixture: ComponentFixture<AllsensorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllsensorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllsensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
