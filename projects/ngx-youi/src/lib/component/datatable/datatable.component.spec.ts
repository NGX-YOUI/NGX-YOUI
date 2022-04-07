import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableComponent } from './datatable.component';

describe('DatatableComponent', () => {
  let component: DatatableComponent<any>;
  let fixture: ComponentFixture<DatatableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
