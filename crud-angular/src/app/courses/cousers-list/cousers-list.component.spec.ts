import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CousersListComponent } from './cousers-list.component';

describe('CousersListComponent', () => {
  let component: CousersListComponent;
  let fixture: ComponentFixture<CousersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CousersListComponent]
    });
    fixture = TestBed.createComponent(CousersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
