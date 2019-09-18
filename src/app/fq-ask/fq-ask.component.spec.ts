import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FqAskComponent } from './fq-ask.component';

describe('FqAskComponent', () => {
  let component: FqAskComponent;
  let fixture: ComponentFixture<FqAskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FqAskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FqAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
