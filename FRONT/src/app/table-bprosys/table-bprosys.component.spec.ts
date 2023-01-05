import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBprosysComponent } from './table-bprosys.component';

describe('TableBprosysComponent', () => {
  let component: TableBprosysComponent;
  let fixture: ComponentFixture<TableBprosysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBprosysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBprosysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
