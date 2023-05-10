import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgmcGVPExpressionComponent } from './lgmc-g-vp-expression.component';

describe('LgmcGVPExpressionComponent', () => {
  let component: LgmcGVPExpressionComponent;
  let fixture: ComponentFixture<LgmcGVPExpressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgmcGVPExpressionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgmcGVPExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
