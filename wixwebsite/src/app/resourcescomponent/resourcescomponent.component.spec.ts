import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcescomponentComponent } from './resourcescomponent.component';

describe('ResourcescomponentComponent', () => {
  let component: ResourcescomponentComponent;
  let fixture: ComponentFixture<ResourcescomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcescomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
