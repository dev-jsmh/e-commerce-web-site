import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNavbarComponent } from './search-navbar-component';

describe('SearchNavbarComponent', () => {
  let component: SearchNavbarComponent;
  let fixture: ComponentFixture<SearchNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
