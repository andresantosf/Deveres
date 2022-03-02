import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeverComponent } from './dever.component';

describe('DeverComponent', () => {
  let component: DeverComponent;
  let fixture: ComponentFixture<DeverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
