import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertActionsComponent } from './advert-actions.component';

describe('AdvertActionsComponent', () => {
  let component: AdvertActionsComponent;
  let fixture: ComponentFixture<AdvertActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
