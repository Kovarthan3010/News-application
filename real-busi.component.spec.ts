import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealBusiComponent } from './real-busi.component';

describe('RealBusiComponent', () => {
  let component: RealBusiComponent;
  let fixture: ComponentFixture<RealBusiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealBusiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealBusiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
