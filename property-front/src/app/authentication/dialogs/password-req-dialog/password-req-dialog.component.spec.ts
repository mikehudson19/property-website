import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordReqDialogComponent } from './password-req-dialog.component';

describe('PasswordReqDialogComponent', () => {
  let component: PasswordReqDialogComponent;
  let fixture: ComponentFixture<PasswordReqDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordReqDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordReqDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
