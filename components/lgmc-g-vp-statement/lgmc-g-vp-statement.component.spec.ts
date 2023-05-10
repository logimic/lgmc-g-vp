import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgmcGVPStatementComponent } from './lgmc-g-vp-statement.component';

describe('LgmcGPVStatementComponent', () => {
  let component: LgmcGVPStatementComponent;
  let fixture: ComponentFixture<LgmcGVPStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgmcGVPStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgmcGVPStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
