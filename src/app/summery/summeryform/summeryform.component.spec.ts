import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummeryformComponent } from './summeryform.component';

describe('SummeryformComponent', () => {
  let component: SummeryformComponent;
  let fixture: ComponentFixture<SummeryformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummeryformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummeryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
