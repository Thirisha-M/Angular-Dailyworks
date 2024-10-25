import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingcomponentComponent } from './pricingcomponent.component';

describe('PricingcomponentComponent', () => {
  let component: PricingcomponentComponent;
  let fixture: ComponentFixture<PricingcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
