import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarProductFilterComponent } from './navbar-product-filter-component';

describe('NavbarProductFilterComponent', () => {
  let component: NavbarProductFilterComponent;
  let fixture: ComponentFixture<NavbarProductFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarProductFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarProductFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
