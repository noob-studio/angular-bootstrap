import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownProductComponent } from './dropdown-product.component';

describe('DropdownProductComponent', () => {
  let component: DropdownProductComponent;
  let fixture: ComponentFixture<DropdownProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
