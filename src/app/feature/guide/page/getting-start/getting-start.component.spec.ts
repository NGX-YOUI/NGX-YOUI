import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettingStartComponent } from './getting-start.component';

describe('GettingStartComponent', () => {
  let component: GettingStartComponent;
  let fixture: ComponentFixture<GettingStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettingStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GettingStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
