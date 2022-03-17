import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertCardLargeComponent } from './advert-card-large.component';

describe('AdvertCardLargeComponent', () => {
  let component: AdvertCardLargeComponent;
  let fixture: ComponentFixture<AdvertCardLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertCardLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertCardLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
