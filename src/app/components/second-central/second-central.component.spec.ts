import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCentralComponent } from './second-central.component';

describe('SecondCentralComponent', () => {
  let component: SecondCentralComponent;
  let fixture: ComponentFixture<SecondCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondCentralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
