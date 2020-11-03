import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGymComponent } from './add-gym.component';

describe('AddGymComponent', () => {
  let component: AddGymComponent;
  let fixture: ComponentFixture<AddGymComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddGymComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
