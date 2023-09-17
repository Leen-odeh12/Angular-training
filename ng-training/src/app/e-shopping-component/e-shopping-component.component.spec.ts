import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EShoppingComponentComponent } from './e-shopping-component.component';

describe('EShoppingComponentComponent', () => {
  let component: EShoppingComponentComponent;
  let fixture: ComponentFixture<EShoppingComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EShoppingComponentComponent]
    });
    fixture = TestBed.createComponent(EShoppingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
