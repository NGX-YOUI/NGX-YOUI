import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemPageComponent } from './youi-menu-item.page.component';

describe('MenuItemPageComponent', () => {
  let component: MenuItemPageComponent;
  let fixture: ComponentFixture<MenuItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
