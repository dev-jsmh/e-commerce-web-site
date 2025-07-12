import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopIndex } from './shop-index';

describe('ShopIndex', () => {
  let component: ShopIndex;
  let fixture: ComponentFixture<ShopIndex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopIndex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopIndex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
