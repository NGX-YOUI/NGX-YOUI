import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionMenuItemComponent } from './expansion-menu-item.component';

describe('ExpansionMenuItemComponent', () => {
  let component: ExpansionMenuItemComponent;
  let fixture: ComponentFixture<ExpansionMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionMenuItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
