import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgmcGVPCmdStatementComponent } from './lgmc-g-vp-cmd-statement.component';

describe('LgmcGVPCmdStatementComponent', () => {
  let component: LgmcGVPCmdStatementComponent;
  let fixture: ComponentFixture<LgmcGVPCmdStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgmcGVPCmdStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgmcGVPCmdStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
