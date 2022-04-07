import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionMenuItemPageComponent } from './youi-expansion-youi-menu-item.page.component';

describe('ExpansionMenuItemPageComponent', () => {
  let component: ExpansionMenuItemPageComponent;
  let fixture: ComponentFixture<ExpansionMenuItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionMenuItemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansionMenuItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
