import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroeComponent } from './erroe.component';

describe('ErroeComponent', () => {
  let component: ErroeComponent;
  let fixture: ComponentFixture<ErroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErroeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
