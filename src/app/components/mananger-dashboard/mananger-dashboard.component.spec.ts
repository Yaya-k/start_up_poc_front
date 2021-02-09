import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManangerDashboardComponent } from './mananger-dashboard.component';

describe('ManangerDashboardComponent', () => {
  let component: ManangerDashboardComponent;
  let fixture: ComponentFixture<ManangerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManangerDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManangerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
