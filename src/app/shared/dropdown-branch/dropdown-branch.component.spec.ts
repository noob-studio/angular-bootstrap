import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownBranchComponent } from './dropdown-branch.component';

describe('DropdownBranchComponent', () => {
  let component: DropdownBranchComponent;
  let fixture: ComponentFixture<DropdownBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
