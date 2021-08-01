import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeesProductsComponent } from './kees-products.component';

describe('KeesProductsComponent', () => {
  let component: KeesProductsComponent;
  let fixture: ComponentFixture<KeesProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeesProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
