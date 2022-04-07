import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerPageComponent } from './spinner-page.component';

describe('SpinnerPageComponent', () => {
  let component: SpinnerPageComponent;
  let fixture: ComponentFixture<SpinnerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
