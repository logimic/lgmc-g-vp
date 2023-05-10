import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgmcGVPCompoundStatementComponent } from './lgmc-g-vp-compound-statement.component';

describe('LgmcGVPCompoundStatementComponent', () => {
  let component: LgmcGVPCompoundStatementComponent;
  let fixture: ComponentFixture<LgmcGVPCompoundStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgmcGVPCompoundStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgmcGVPCompoundStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
