import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgmcGVpProgramComponent } from './lgmc-g-vp-program.component';

describe('LgmcGVpProgramComponent', () => {
  let component: LgmcGVpProgramComponent;
  let fixture: ComponentFixture<LgmcGVpProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgmcGVpProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgmcGVpProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
