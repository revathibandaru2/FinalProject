import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSectionsComponent } from './view-sections.component';

describe('ViewSectionsComponent', () => {
  let component: ViewSectionsComponent;
  let fixture: ComponentFixture<ViewSectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSectionsComponent]
    });
    fixture = TestBed.createComponent(ViewSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
