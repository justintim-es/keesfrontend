import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeesComponent } from './kees.component';

describe('KeesComponent', () => {
  let component: KeesComponent;
  let fixture: ComponentFixture<KeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
