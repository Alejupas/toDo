import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllitemsComponent } from './allitems.component';

describe('AllitemsComponent', () => {
  let component: AllitemsComponent;
  let fixture: ComponentFixture<AllitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
