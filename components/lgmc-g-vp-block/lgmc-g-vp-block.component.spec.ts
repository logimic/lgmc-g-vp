import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgmcGVPBlockComponent } from './lgmc-g-vp-block.component';

describe('LgmcGVPBlockComponent', () => {
  let component: LgmcGVPBlockComponent;
  let fixture: ComponentFixture<LgmcGVPBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgmcGVPBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgmcGVPBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
