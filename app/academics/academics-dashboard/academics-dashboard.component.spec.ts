import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsDashboardComponent } from './academics-dashboard.component';

describe('AcademicsDashboardComponent', () => {
  let component: AcademicsDashboardComponent;
  let fixture: ComponentFixture<AcademicsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcademicsDashboardComponent]
    });
    fixture = TestBed.createComponent(AcademicsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
