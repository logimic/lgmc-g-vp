import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgmcGVpTextEditorComponent } from './lgmc-g-vp-text-editor.component';

describe('LgmcGVpTextEditorComponent', () => {
  let component: LgmcGVpTextEditorComponent;
  let fixture: ComponentFixture<LgmcGVpTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LgmcGVpTextEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LgmcGVpTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
