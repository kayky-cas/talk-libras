import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradutorPageComponent } from './tradutor-page.component';

describe('TradutorPageComponent', () => {
  let component: TradutorPageComponent;
  let fixture: ComponentFixture<TradutorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradutorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradutorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
