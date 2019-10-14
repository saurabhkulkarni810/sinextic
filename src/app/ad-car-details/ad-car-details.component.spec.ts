import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCarDetailsComponent } from './ad-car-details.component';

describe('AdCarDetailsComponent', () => {
  let component: AdCarDetailsComponent;
  let fixture: ComponentFixture<AdCarDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdCarDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
