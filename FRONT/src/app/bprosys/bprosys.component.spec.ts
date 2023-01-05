import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BprosysComponent } from './bprosys.component';

describe('BprosysComponent', () => {
  let component: BprosysComponent;
  let fixture: ComponentFixture<BprosysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BprosysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BprosysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
